const { default: axios } = require("axios");

const key = process.env.NEXT_PUBLIC_REST_API_KEY;
const Url = process.env.NEXT_PUBLIC_URL;

const client = axios.create({
  baseURL: Url,
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default client;
