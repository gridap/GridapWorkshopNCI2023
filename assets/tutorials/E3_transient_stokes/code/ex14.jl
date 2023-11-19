# This file was generated, do not modify it. # hide
u₀ = interpolate_everywhere(u(0.0),U(0.0))
p₀ = interpolate_everywhere(p(0.0),P)

x₀ = interpolate_everywhere([u₀,p₀],X(0.0))
t₀ = 0.0
T = 1.0
xₕₜ = solve(ode_solver,op,x₀,t₀,T)