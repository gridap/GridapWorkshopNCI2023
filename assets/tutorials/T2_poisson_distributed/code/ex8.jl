# This file was generated, do not modify it. # hide
dof_gids = V.gids
local_dofs_to_global_dof = map(local_to_global,partition(dof_gids))
local_dofs_to_owner      = map(local_to_owner,partition(dof_gids))
owned_dofs_to_local_dof  = map(own_to_local,partition(dof_gids))
ghost_dofs_to_local_dof  = map(ghost_to_local,partition(dof_gids))