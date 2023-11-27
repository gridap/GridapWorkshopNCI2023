# This file was generated, do not modify it. # hide
cell_gids = get_cell_gids(model)
local_cell_to_global_cell = map(local_to_global,partition(cell_gids))
local_cell_to_owner       = map(local_to_owner,partition(cell_gids))
owned_cell_to_local_cell  = map(own_to_local,partition(cell_gids))
ghost_cell_to_local_cell  = map(ghost_to_local,partition(cell_gids))