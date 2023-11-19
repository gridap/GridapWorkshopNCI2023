# This file was generated, do not modify it. # hide
using DrWatson
out_file = datadir("ins")
writevtk(Ωₕ,out_file,cellfields=["uh"=>uh,"ph"=>ph])