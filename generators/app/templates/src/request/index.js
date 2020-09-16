const axios = require("axios");

const baseURL = "https://some-domain.com/api/";
const request = () =>
  axios.create({
    baseURL,
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
  });

module.exports = { request, baseURL };
