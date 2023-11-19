# This file was generated, do not modify it. # hide
order_vec = [1,2]
n_vec = [10,20,40,80]
h_vec = map(n -> (2π/n)*(π/n)*(0.5), n_vec)

error = zeros((length(order_vec),length(n_vec)))
for (i,order) in enumerate(order_vec)
  for (j,n) in enumerate(n_vec)
    error[i,j] = driver(n,order)
  end
end