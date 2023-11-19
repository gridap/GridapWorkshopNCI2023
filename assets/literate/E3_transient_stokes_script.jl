# This file was generated, do not modify it.

# Solution of exercise 1

# Solution of exercise 2

u(x,t::Real) = t*VectorValue(x[1],x[2])
u(t::Real) = x -> u(x,t)

U = TransientTrialFESpace(V,u)

P = TrialFESpace(Q)

Y = MultiFieldFESpace([V, Q])
X = TransientMultiFieldFESpace([U, P])

degree = 2*order
Ωₕ = Triangulation(model)
dΩ = Measure(Ωₕ,degree)

# Solution of exercise 3

p(t::Real) = x -> t*(x[1]-x[2])

f_AD(t::Real) = x -> ∂t(u)(t)(x)-Δ(u(t))(x)+ ∇(p(t))(x)
g_AD(t::Real) = x -> (∇⋅u(t))(x)

@assert f(1.0)(Point(0.5,0.5)) == f_AD(1.0)(Point(0.5,0.5)) == VectorValue(1.5,-0.5)
@assert g(1.0)(Point(0.5,0.5)) == g_AD(1.0)(Point(0.5,0.5)) == 2.0

# Solution of exercise 4

op = TransientAffineFEOperator(m,a,b,X,Y)

ls = LUSolver()

# Solution of exercise 5

u₀ = interpolate_everywhere(u(0.0),U(0.0))
p₀ = interpolate_everywhere(p(0.0),P)

x₀ = interpolate_everywhere([u₀,p₀],X(0.0))
t₀ = 0.0
T = 1.0
xₕₜ = solve(ode_solver,op,x₀,t₀,T)

using DrWatson
out_file = datadir("transient_stokes")
createpvd(out_file) do pvd
  for (xₕ,t) in xₕₜ
    (uₕ,pₕ) = xₕ
    pvd[t] = createvtk(Ωₕ,out_file*"_$t.vtu",cellfields=["uh"=>uₕ,"ph"=>pₕ])
  end
end
