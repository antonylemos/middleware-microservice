const axios = require('axios');

const http = axios.create({
  baseURL: 'http://localhost:4444',
});

module.exports = http;
