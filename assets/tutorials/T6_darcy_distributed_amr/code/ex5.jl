# This file was generated, do not modify it. # hide
function get_cell_to_parallel_task(model)
  model_partition_descriptor=partition(get_cell_gids(model))
  map(model_partition_descriptor) do indices
    own_to_owner(indices)
  end
end