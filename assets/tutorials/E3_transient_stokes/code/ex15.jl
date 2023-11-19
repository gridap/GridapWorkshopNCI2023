# This file was generated, do not modify it. # hide
using DrWatson
out_file = datadir("transient_stokes")
createpvd(out_file) do pvd
  for (xₕ,t) in xₕₜ
    (uₕ,pₕ) = xₕ
    pvd[t] = createvtk(Ωₕ,out_file*"_$t.vtu",cellfields=["uh"=>uₕ,"ph"=>pₕ])
  end
end