# This file was generated, do not modify it. # hide
u₀ = interpolate_everywhere([VectorValue(0.0,0.0),0.0],X(0.0))
t₀ = 0.0
T  = Tth
xₕₜ = solve(ode_solver,op,u₀,t₀,T)

dir = datadir("ins_transient")
!isdir(dir) && mkdir(dir)
createpvd(dir) do pvd
  for (xₕ,t) in xₕₜ
    println(" > Computing solution at time $t")
    uₕ,pₕ = xₕ
    file = dir*"/solution_$t"*".vtu"
    pvd[t] = createvtk(Ω,file,cellfields=["u"=>uₕ,"p"=>pₕ])
  end
end