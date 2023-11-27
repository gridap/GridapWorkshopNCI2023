# This file was generated, do not modify it. # hide
dΩe  = Measure(Ω,degree*2)
e = uh - u₀
l2_error = sqrt(sum(∫(e⋅e)*dΩe))