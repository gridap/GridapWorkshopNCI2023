# This file was generated, do not modify it. # hide
using DrWatson
dir = datadir("transient_stokes")
!isdir(dir) && mkdir(dir)
createpvd(dir) do pvd
  for (xₕ,t) in xₕₜ
    (uₕ,pₕ) = xₕ
    file = dir*"/solution_$t"*".vtu"
    pvd[t] = createvtk(Ω,file,cellfields=["uh"=>uₕ,"ph"=>pₕ])
  end
end