# This file was generated, do not modify it. # hide
function compute_error_darcy(model,order,xh)
  Ω = Triangulation(model)
  degree = 4*(order+1)
  dΩ = Measure(Ω,degree)

  Γ = BoundaryTriangulation(model)
  degree = 2*(order+1)
  dΓ = Measure(Γ,degree)
  nΓ = get_normal_vector(Γ)

  uh, ph = xh
  eu = u_exact - uh
  ep = p_exact - ph

  l2_norm(v)   = sqrt(sum(∫(v⋅v)dΩ))
  hdiv_norm(v) = sqrt(sum(∫(v⋅v + (∇⋅v)*(∇⋅v))dΩ))

  l2_norm(eu), hdiv_norm(eu), l2_norm(ep)
end