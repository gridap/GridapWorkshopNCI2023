# This file was generated, do not modify it. # hide
import Random
Random.seed!(1234)
x = rand(Float64,num_free_dofs(Ug))
uh0 = FEFunction(Ug,x)
uh, = solve!(uh0,solver,op)