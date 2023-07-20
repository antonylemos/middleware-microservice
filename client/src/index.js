const http = require('./http');

function post() {
  console.log('⚡ Client started');

  const body = { sender: 'Antony', description: 'Vasco campeão' };

  http.post('/messages', body);

  console.log('Request sended')
}

post();