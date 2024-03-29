const { default: client } = require("./axiosClient");

const getLatestProducts = async () => await client.get("/products?populate=*");
const getProduct = async (id) => await client.get(`/products/${id}?populate=*`);

export default {
  getLatestProducts,
  getProduct,
};
