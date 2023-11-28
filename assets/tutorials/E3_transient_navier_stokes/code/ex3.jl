# This file was generated, do not modify it. # hide
const Tth = 2
const Uₘ = 1.5
const H  = 0.41
ξ(t) = (t <= Tth) ? sin(π*t/(2*Tth)) : 1.0
# u_in(x,t::Real) =
# u_w(x,t::Real)  =
# u_c(x,t::Real)  =
u_in(t::Real)   = x -> u_in(x,t)
u_w(t::Real)    = x -> u_w(x,t)
u_c(t::Real)    = x -> u_c(x,t)