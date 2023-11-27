# This file was generated, do not modify it. # hide
U = TransientTrialFESpace(V,[u_in,u_w,u_c])
P = TrialFESpace(Q)

Y = MultiFieldFESpace([V, Q])
X = TransientMultiFieldFESpace([U, P])