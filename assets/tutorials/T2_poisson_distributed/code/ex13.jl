# This file was generated, do not modify it. # hide
owned_dofs_to_local_dof  = map(own_to_local,partition(dof_gids))
ghost_dofs_to_local_dof  = map(ghost_to_local,partition(dof_gids))

owned_rows_to_local_row  = map(own_to_local,partition(rows))
ghost_rows_to_local_row  = map(ghost_to_local,partition(rows))