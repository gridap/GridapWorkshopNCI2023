# This file was generated, do not modify it. # hide
using LineSearches: BackTracking
nls = NLSolver(show_trace=true, method=:newton, linesearch=BackTracking())

# Δt =
# θ  =
# ode_solver =