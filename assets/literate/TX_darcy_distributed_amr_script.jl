# This file was generated, do not modify it.

using Gridap
using PartitionedArrays
using GridapDistributed
using GridapP4est
using MPI

β, r, xc = 100.0, 0.7, VectorValue(-0.05, -0.05)
p_exact(x) = atan(β * (sqrt((x[1] - xc[1])^2 + (x[2] - xc[2])^2) - r))
u_exact(x) = -∇(p_exact)(x)
f(x) = (∇⋅u_exact)(x)

function solve_darcy(model,order)
  V = FESpace(model,
              ReferenceFE(raviart_thomas,Float64,order),
              conformity=:Hdiv)

  Q = FESpace(model,
              ReferenceFE(lagrangian,Float64,order);
              conformity=:L2)

  U = TrialFESpace(V,u_exact)
  P = TrialFESpace(Q)

  Y = MultiFieldFESpace([V, Q])
  X = MultiFieldFESpace([U, P])

  trian = Triangulation(model)
  degree = 2*(order+1)
  dΩ = Measure(trian,degree)

  Γ = BoundaryTriangulation(model)
  dΓ = Measure(Γ,degree)
  nΓ = get_normal_vector(Γ)

  a((u, p),(v, q)) = ∫(u⋅v)dΩ +∫(q*(∇⋅u))dΩ-∫((∇⋅v)*p)dΩ
  b((v, q)) = ∫(q*f)dΩ-∫((v⋅nΓ)*p_exact )dΓ

  op = AffineFEOperator(a,b,X,Y)
  xh = solve(op)
  xh, num_free_dofs(Y)
end

function compute_error_darcy(model,degree,xh)
  Ω = Triangulation(model)
  degree = 4*(order+1)
  dΩ = Measure(Ω,degree)

  Γ = BoundaryTriangulation(model)
  degree = 2*(order+1)
  dΓ = Measure(Γ,degree)
  nΓ = get_normal_vector(Γ)

  uh, ph = xh
  eu = u_exact - uh
  ep = p_exact - ph

  l2_norm(v)   = sqrt(sum(∫(v⋅v)dΩ))
  hdiv_norm(v) = sqrt(sum(∫(v⋅v + (∇⋅v)*(∇⋅v))dΩ))

  l2_norm(eu), hdiv_norm(eu), l2_norm(ep)
end

coarse_model=CartesianDiscreteModel((0,1,0,1),(1,1))

MPI.Init()
nprocs = MPI.Comm_size(MPI.COMM_WORLD)
ranks  = with_mpi() do distribute
  distribute(LinearIndices((prod(nprocs),)))
end

num_uniform_refinement_steps=6
model=OctreeDistributedDiscreteModel(ranks,coarse_model,num_uniform_refinement_steps)

function amr_loop(model, order, num_amr_steps, αr, αc;
                  generate_vtk_files=true, redistribute_load=true)

  adaptive_strategy=
      FixedFractionAdaptiveFlagsMarkingStrategy(αr, αc)

  ndofs_x_level=Int[]
  l2eu_x_level=Float64[]
  hdiveu_x_level=Float64[]
  l2pe_x_level=Float64[]

  for amr_step=0:num_amr_steps
    # Solve the finite element problem in the current mesh
    xh,ndofs=solve_darcy(model,order)

    if (generate_vtk_files)
       uh,ph = xh
       writevtk(Triangulation(model),
                "results_amr_step_$(amr_step)",
                cellfields=["uh"=>uh,"ph"=>ph,"euh"=>u_exact-uh,"eph"=>p_exact-ph])
    end

    # Compute error among finite element solution and exact solution
    l2eu,hdiveu,l2ep=compute_error_darcy(model,2*order+1,xh)
    append!(l2eu_x_level,l2eu)
    append!(hdiveu_x_level,hdiveu)
    append!(l2pe_x_level,l2ep)
    append!(ndofs_x_level,ndofs)

    # Compute error indicators e_K
    uh,ph = xh
    eph = p_exact-ph
    Ω = Triangulation(model)
    dΩ = Measure(Ω,2*order+1)
    e_K = map(dc -> sqrt.(get_array(dc)), local_views(∫(eph*eph)dΩ))

    # Get object which describes how the mesh is partitioned/distributed among parallel tasks
    model_partition_descriptor=partition(get_cell_gids(model))

    # Create/initialize adaptivity flags
    ref_coarse_flags = map(model_partition_descriptor) do indices
      flags = Vector{Int64}(undef, length(indices))
      flags .= nothing_flag
    end

    # Determine which cells are marked for refinement/coarsening
    update_adaptivity_flags!(ref_coarse_flags,
                             adaptive_strategy,
                             model_partition_descriptor,
                             e_K)

    # Adapt the model given the adaptivity flags
    model,_= adapt(model, ref_coarse_flags)

    if (amr_step != num_amr_steps && redistribute_load)
      # Dynamically redistribute the model among parallel tasks
      model,_= redistribute(model)
    end
  end
  model,ndofs_x_level,l2eu_x_level,hdiveu_x_level,l2pe_x_level
end

order=1
αr=0.1
αc=0.05
num_amr_steps=4
final_model,ndofss,l2ues,hdivues,l2pes=amr_loop(model, order, num_amr_steps, αr, αc;
                                                generate_vtk_files=true, redistribute_load=true)

if (MPI.Comm_rank()==0)
end
