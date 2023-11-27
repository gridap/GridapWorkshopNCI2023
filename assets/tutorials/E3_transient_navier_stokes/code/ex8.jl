# This file was generated, do not modify it. # hide
using LineSearches: BackTracking
nls = NLSolver(show_trace=true, method=:newton, linesearch=BackTracking())

Δt = 0.01
θ  = 0.5
ode_solver = ThetaMethod(nls,Δt,θ)