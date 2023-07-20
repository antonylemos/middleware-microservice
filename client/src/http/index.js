const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:3333',
});

module.exports = http;
