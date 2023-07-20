const http = require('../http');

class MessageRepository {
  async create({ sender, description }) {
    const body = {
      type: 'create',
      context: 'messages',
      content: { sender, description },
    };

    await http.post('/queue', body);

    return { message: 'Registrado na fila' };
  }
}

module.exports = new MessageRepository();
