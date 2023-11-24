# This file was generated, do not modify it. # hide
if (MPI.Comm_rank(MPI.COMM_WORLD)==0)
  using Plots
  plt = plot(xlabel="ndofs",ylabel="L2 error (fluid velocity)",grid=true)
  plot!(plt,title="γ=$(γ), r=$(r), center=$(xc)", yaxis=:log10, xaxis=:log10, linewidth=3)
  plot!(plt,ndofss,l2ues,label="order=$(order) AMR",markershape=:s,markersize=6)
  savefig(plt, "amr_error_decay_l2eu_order=$(order).pdf" )
end