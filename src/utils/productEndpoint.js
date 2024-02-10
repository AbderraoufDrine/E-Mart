const { default: client } = require("./axiosClient");

const getLatestProducts = async () => await client.get("/products");

export default {
  getLatestProducts,
};
