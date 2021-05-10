export const getElementById = (id, products) => {
  return products.find((product) => product.id === id);
};
