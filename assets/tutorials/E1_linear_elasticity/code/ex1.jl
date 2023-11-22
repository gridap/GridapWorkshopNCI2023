# This file was generated, do not modify it. # hide
using Gridap, GridapGmsh
using DrWatson

msh_file_gmsh = projectdir("meshes/elasticity.msh")
model = GmshDiscreteModel(msh_file_gmsh)