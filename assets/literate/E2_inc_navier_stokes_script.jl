# This file was generated, do not modify it.

using Gridap
# Solution of exercise 1

# Solution of exercise 2

reffeₚ = ReferenceFE(lagrangian,Float64,order-1;space=:P)
Q = TestFESpace(model,reffeₚ,conformity=:L2,constraint=:zeromean)

# Solution of exercise 3

Y = MultiFieldFESpace([V, Q])
X = MultiFieldFESpace([U, P])

degree = order
Ωₕ = Triangulation(model)
dΩ = Measure(Ωₕ,degree)

const Re = 10.0
conv(u,∇u) = Re*(∇u')⋅u
dconv(du,∇du,u,∇u) = conv(u,∇du)+conv(du,∇u)

a((u,p),(v,q)) = ∫( ∇(v)⊙∇(u) - (∇⋅v)*p + q*(∇⋅u) )dΩ

c(u,v) = ∫( v⊙(conv∘(u,∇(u))) )dΩ
dc(u,du,v) = ∫( v⊙(dconv∘(du,∇(du),u,∇(u))) )dΩ

res((u,p),(v,q)) = a((u,p),(v,q)) + c(u,v)
jac((u,p),(du,dp),(v,q)) = a((du,dp),(v,q)) + dc(u,du,v)

op = FEOperator(res,jac,X,Y)

using LineSearches: BackTracking
nls = NLSolver(
  show_trace=true, method=:newton, linesearch=BackTracking())
solver = FESolver(nls)

uh, ph = solve(solver,op)

using DrWatson
out_file = datadir("ins")
writevtk(Ωₕ,out_file,cellfields=["uh"=>uh,"ph"=>ph])
