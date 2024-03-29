const { default: client } = require("./axiosClient");

const getLatestProducts = async () => await client.get("/products?populate=*");
const getProduct = async (id) => await client.get(`/products/${id}?populate=*`);
const getProductByCategory = async (category) =>
  await client.get(`/products?filters[category][$eq]=${category}&populate=*`);

export default {
  getLatestProducts,
  getProduct,
  getProductByCategory,
};
