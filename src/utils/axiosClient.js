const { default: axios } = require("axios");

const key = process.env.NEXT_PUBLIC_REST_API_KEY;
const Url = "http://localhost:1337/api";

const client = axios.create({
  baseURL: Url,
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default client;
