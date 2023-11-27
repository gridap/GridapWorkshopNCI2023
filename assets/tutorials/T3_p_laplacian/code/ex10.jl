# This file was generated, do not modify it. # hide
dflux(∇du,∇u) = (p-2)*norm(∇u)^(p-4)*(∇u⊙∇du)*∇u+norm(∇u)^(p-2)*∇du
jac(u,du,v) = ∫( ∇(v)⊙(dflux∘(∇(du),∇(u))) )*dΩ