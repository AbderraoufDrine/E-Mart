const { default: client } = require("./axiosClient");

const createOrder = (data) => client.post("/orders", data);

export default { createOrder };
