# This file was generated, do not modify it. # hide
MPI.Init()
nprocs = MPI.Comm_size(MPI.COMM_WORLD)
ranks  = with_mpi() do distribute
  distribute(LinearIndices((prod(nprocs),)))
end