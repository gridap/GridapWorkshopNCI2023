# This file was generated, do not modify it. # hide
using Gridap
using DrWatson

model = CartesianDiscreteModel((0,1,0,1),(20,20))
Ω  = Triangulation(model)
dΩ = Measure(Ω,2)