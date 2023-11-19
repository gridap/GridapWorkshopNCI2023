# This file was generated, do not modify it. # hide
# Approximation spaces

order = 1
reffe = ReferenceFE(lagrangian,Float64,order)
V = TestFESpace(model,reffe;conformity=:H1,dirichlet_tags="dirichlet")