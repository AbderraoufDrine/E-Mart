const { default: client } = require("./axiosClient");

const addToCart = (payload) => client.post("/carts", payload);

const getUserCartItems = (email) =>
  client.get(
    `carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

const deleteCartItem = (id) => client.delete(`/carts/${id}`);
export default {
  addToCart,
  getUserCartItems,
  deleteCartItem,
};
