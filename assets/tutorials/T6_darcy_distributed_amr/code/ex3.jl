# This file was generated, do not modify it. # hide
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