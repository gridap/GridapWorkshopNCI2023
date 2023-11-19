# This file was generated, do not modify it. # hide
p(t::Real) = x -> t*(x[1]-x[2])

f_AD(t::Real) = x -> ∂t(u)(t)(x)-Δ(u(t))(x)+ ∇(p(t))(x)
g_AD(t::Real) = x -> (∇⋅u(t))(x)