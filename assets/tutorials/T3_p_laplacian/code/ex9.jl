# This file was generated, do not modify it. # hide
const p = 3
flux(∇u) = norm(∇u)^(p-2) * ∇u
f(x) = 1
res(u,v) = ∫( ∇(v)⊙(flux∘∇(u)) - v*f )*dΩ