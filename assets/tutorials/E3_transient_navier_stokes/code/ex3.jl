# This file was generated, do not modify it. # hide
const Tth = 2
const Uₘ = 1.5
const H  = 0.41
ξ(t) = (t <= Tth) ? sin(π*t/(2*Tth)) : 1.0
u_in(x,t::Real) = VectorValue( 4 * Uₘ * x[2] * (H-x[2]) / (H^2) * ξ(t), 0.0 )
u_w(x,t::Real)  = VectorValue(0.0,0.0)
u_c(x,t::Real)  = VectorValue(0.0,0.0)
u_in(t::Real)   = x -> u_in(x,t)
u_w(t::Real)    = x -> u_w(x,t)
u_c(t::Real)    = x -> u_c(x,t)