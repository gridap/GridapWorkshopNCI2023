# This file was generated, do not modify it. # hide
using Gridap, GridapGmsh
using DrWatson

msh_file = projectdir("meshes/perforated_plate_tiny.msh")
model = GmshDiscreteModel(msh_file)