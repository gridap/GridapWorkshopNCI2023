# This file was generated, do not modify it. # hide
@assert f(1.0)(Point(0.5,0.5)) == f_AD(1.0)(Point(0.5,0.5)) == VectorValue(1.5,-0.5)
@assert g(1.0)(Point(0.5,0.5)) == g_AD(1.0)(Point(0.5,0.5)) == 2.0