# This file was generated, do not modify it. # hide
x_r = pfill(0.0,partition(axes(A,1))) # Row layout
x_c = pfill(0.0,partition(axes(A,2))) # Col layout
x_r .= A * x_c # OK