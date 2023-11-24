# This file was generated, do not modify it. # hide
order=1
αr=0.1
αc=0.05
num_amr_steps=4
final_model,ndofss,l2ues,hdivues,l2pes=amr_loop(model, order, num_amr_steps, αr, αc;
                                                generate_vtk_files=true, redistribute_load=true)