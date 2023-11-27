# This file was generated, do not modify it. # hide
u₀ = interpolate_everywhere(0.0,U(0.0))
t₀ = 0.0
T = 10.0
uₕₜ = solve(ode_solver,op,u₀,t₀,T)