# This file was generated, do not modify it. # hide
m(t,u,v) = ∫( u*v )dΩ
a(t,u,v) = ∫( κ(t)*(∇(u)⋅∇(v)) )dΩ
b(t,v) = ∫( f(t)*v )dΩ
op_Af = TransientAffineFEOperator(m,a,b,U,V)