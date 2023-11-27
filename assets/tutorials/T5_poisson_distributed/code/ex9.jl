# This file was generated, do not modify it. # hide
degree = 2*order
Ω = Triangulation(model)
dΩ = Measure(Ω,degree)

f(x)   = cos(x[1])
a(u,v) = ∫( ∇(v)⋅∇(u) )*dΩ
l(v)   = ∫( v*f )*dΩ

op = AffineFEOperator(a,l,V,U)
uh = solve(op)