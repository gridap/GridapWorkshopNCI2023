# This file was generated, do not modify it. # hide
using Plots
plt = plot(xlabel="log10(h)",ylabel="log10(L2 error)",grid=true)
for (i,e) in enumerate(eachrow(error))
  order = order_vec[i]
  dx = log10(h_vec[1]) - log10(h_vec[end])
  dy = log10(e[1]) - log10(e[end])
  slope = string(dy/dx)[1:4]
  plot!(plt,log10.(h_vec),log10.(e),label="p = $(order), slope = $(slope)")
end
@show plt