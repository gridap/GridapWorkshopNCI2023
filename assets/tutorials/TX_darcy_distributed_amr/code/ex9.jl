# This file was generated, do not modify it. # hide
function amr_loop(model, order, num_amr_steps, αr, αc;
                  generate_vtk_files=true, redistribute_load=true)

  adaptive_strategy=
      FixedFractionAdaptiveFlagsMarkingStrategy(αr, αc)

  ndofs_x_level=Int[]
  l2eu_x_level=Float64[]
  hdiveu_x_level=Float64[]
  l2pe_x_level=Float64[]

  dir = datadir("darcy-amr")
  i_am_main(ranks) && !isdir(dir) && mkdir(dir)
  for amr_step = 0:num_amr_steps
    # Solve the finite element problem in the current mesh
    xh,ndofs = solve_darcy(model,order)

    if (generate_vtk_files)
      file  = dir*"/results_amr_order=$(order)_step_$(amr_step)"
      uh,ph = xh
      writevtk(Triangulation(model),
               file,
               cellfields=["uh"=>uh,
                           "ph"=>ph,
                           "euh"=>u_exact-uh,
                           "eph"=>p_exact-ph,
                           "partition"=>get_cell_to_parallel_task(model)])
    end

    # Compute error among finite element solution and exact solution
    l2eu,hdiveu,l2ep=compute_error_darcy(model,order,xh)
    append!(l2eu_x_level,l2eu)
    append!(hdiveu_x_level,hdiveu)
    append!(l2pe_x_level,l2ep)
    append!(ndofs_x_level,ndofs)

    # Compute error indicators e_K
    uh,ph = xh
    euh = u_exact-uh
    eph = p_exact-ph
    Ω = Triangulation(model)
    dΩ = Measure(Ω,2*order+1)
    e_K = map(dc -> sqrt.(get_array(dc)), local_views(∫(euh⋅euh)dΩ))

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