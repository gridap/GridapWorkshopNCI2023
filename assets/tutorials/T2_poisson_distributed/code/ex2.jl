# This file was generated, do not modify it. # hide
nprocs = (2,1)
ranks  = with_debug() do distribute
  distribute(LinearIndices((prod(nprocs),)))
end