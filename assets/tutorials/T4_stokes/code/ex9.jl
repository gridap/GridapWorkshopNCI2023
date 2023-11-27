# This file was generated, do not modify it. # hide
f = VectorValue(0.0,0.0)
a((u,p),(v,q)) = ∫( ∇(v)⊙∇(u) - (∇⋅v)*p + q*(∇⋅u) )dΩ
l((v,q)) = ∫( v⋅f )dΩ