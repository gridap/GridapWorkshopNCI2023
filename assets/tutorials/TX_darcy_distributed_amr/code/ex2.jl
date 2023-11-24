# This file was generated, do not modify it. # hide
β, r, xc = 100.0, 0.7, VectorValue(-0.05, -0.05)
p_exact(x) = atan(β * (sqrt((x[1] - xc[1])^2 + (x[2] - xc[2])^2) - r))
u_exact(x) = -∇(p_exact)(x)
f(x) = (∇⋅u_exact)(x)