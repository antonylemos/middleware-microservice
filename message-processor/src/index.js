const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('<-- Error Handler -->');
  console.log(error);
  response.sendStatus(500);
});

app.listen(4444, () => console.log('⚡ Message processor started at http://localhost:4444'));
