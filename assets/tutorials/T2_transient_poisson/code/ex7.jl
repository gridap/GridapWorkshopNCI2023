# This file was generated, do not modify it. # hide
m₀(u,v) = ∫( u*v )dΩ
a₀(u,v) = ∫( κ(0.0)*(∇(u)⋅∇(v)) )dΩ
op_CM = TransientConstantMatrixFEOperator(m₀,a₀,b,U,V)