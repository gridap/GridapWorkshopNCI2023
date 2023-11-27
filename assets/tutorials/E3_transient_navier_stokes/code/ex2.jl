# This file was generated, do not modify it. # hide
D = 2
k = 2

reffeᵤ = ReferenceFE(lagrangian,VectorValue{D,Float64},k)
reffeₚ = ReferenceFE(lagrangian,Float64,k-1)

V = TestFESpace(model,reffeᵤ,conformity=:H1,dirichlet_tags=["inlet","walls","cylinder"])
Q = TestFESpace(model,reffeₚ,conformity=:C0)