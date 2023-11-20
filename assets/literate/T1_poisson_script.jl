# This file was generated, do not modify it.

using Gridap
using DrWatson

u(x) = cos(x[1])*sin(x[2]+π)

domain = (-π,π,-π/2,π/2,0,1)
nC     = (100,40,5)
model  = CartesianDiscreteModel(domain,nC)

labels = get_face_labeling(model)

add_tag_from_tags!(labels,"dirichlet",["tag_21","tag_22"])
add_tag_from_tags!(labels,"neumann",["tag_23","tag_24","tag_25","tag_26"])

order = 1
reffe = ReferenceFE(lagrangian,Float64,order)
V = TestFESpace(model,reffe;conformity=:H1,dirichlet_tags="dirichlet")

g(x) = u(x)
U = TrialFESpace(V,g)

degree = order*2
Ω  = Triangulation(model)
dΩ = Measure(Ω,degree)

Γ   = BoundaryTriangulation(model,tags="neumann")
dΓ  = Measure(Γ,degree)

n_Γ = get_normal_vector(Γ)

f(x)   = -Δ(u)(x)
∇u(x)  = ∇(u)(x)
a(u,v) = ∫( ∇(v)⋅∇(u) )*dΩ
l(v)   = ∫( v*f )*dΩ + ∫( v*(∇u⋅n_Γ) )*dΓ

op = AffineFEOperator(a,l,U,V)

A = get_matrix(op)
b = get_vector(op)

ls = LUSolver()
solver = LinearFESolver(ls)

uh = solve(solver,op)

writevtk(Ω,datadir("poisson_sol"),cellfields=["uh"=>uh])

e = uh - u
l2_error = sum(∫(e⋅e)*dΩ)

function driver(n,order)
  domain = (-π,π,-π/2,π/2,0,1)
  nC     = (n,n,1)
  model  = CartesianDiscreteModel(domain,nC)
  labels = get_face_labeling(model)
  add_tag_from_tags!(labels,"dirichlet",["tag_21","tag_22"])
  add_tag_from_tags!(labels,"neumann",["tag_23","tag_24","tag_25","tag_26"])

  reffe = ReferenceFE(lagrangian,Float64,order)
  V = TestFESpace(model,reffe;conformity=:H1,dirichlet_tags="dirichlet")

  U = TrialFESpace(V,u)
  degree = order*2+1
  Ω   = Triangulation(model)
  dΩ  = Measure(Ω,degree)
  Γ   = BoundaryTriangulation(model,tags="neumann")
  dΓ  = Measure(Γ,degree)
  n_Γ = get_normal_vector(Γ)

  f(x)   = -Δ(u)(x)
  ∇u(x)  = ∇(u)(x)
  a(u,v) = ∫( ∇(v)⋅∇(u) )*dΩ
  l(v)   = ∫( v*f )*dΩ + ∫( v*(∇u⋅n_Γ) )*dΓ
  op     = AffineFEOperator(a,l,U,V)
  ls     = LUSolver()
  solver = LinearFESolver(ls)
  uh = solve(solver,op)

  e = uh - u
  return sum(∫(e⋅e)*dΩ)
end

order_vec = [1,2]
n_vec = [10,20,40,80]
h_vec = map(n -> (2π/n)*(π/n)*(0.5), n_vec)

error = zeros((length(order_vec),length(n_vec)))
for (i,order) in enumerate(order_vec)
  for (j,n) in enumerate(n_vec)
    error[i,j] = driver(n,order)
  end
end

using Plots
plt = plot(xlabel="log10(h)",ylabel="log10(L2 error)",grid=true)
for (i,e) in enumerate(eachrow(error))
  order = order_vec[i]
  dx = log10(h_vec[1]) - log10(h_vec[end])
  dy = log10(e[1]) - log10(e[end])
  slope = string(dy/dx)[1:4]
  plot!(plt,log10.(h_vec),log10.(e),label="p = $(order), slope = $(slope)")
end
@show plt
