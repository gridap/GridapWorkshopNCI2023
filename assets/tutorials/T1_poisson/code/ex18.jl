# This file was generated, do not modify it. # hide
function driver(n,order)
  domain = (-π,π,-π/2,π/2,0,1)
  nC     = (n,n,1)
  model  = CartesianDiscreteModel(domain,nC)
  labels = get_face_labeling(model)
  add_tag_from_tags!(labels,"dirichlet",["tag_21","tag_22"])
  add_tag_from_tags!(labels,"neumann",["tag_23","tag_24","tag_25","tag_26"])

  reffe = ReferenceFE(lagrangian,Float64,order)
  V = TestFESpace(model,reffe;conformity=:H1,dirichlet_tags="dirichlet")

  U = TrialFESpace(V,g)
  degree = order*2+1
  Ω   = Triangulation(model)
  dΩ  = Measure(Ω,degree)
  Γ   = BoundaryTriangulation(model,tags="neumann")
  dΓ  = Measure(Γ,degree)

  a(u,v) = ∫( ∇(v)⋅∇(u) )*dΩ
  l(v)   = ∫( v*f )*dΩ + ∫( v*h )*dΓ
  op     = AffineFEOperator(a,l,U,V)
  ls     = LUSolver()
  solver = LinearFESolver(ls)
  uh = solve(solver,op)

  dΩe  = Measure(Ω,degree*2)
  e = uh - u₀
  return sum(∫(e⋅e)*dΩe)
end