const queue = require('../../queue');

class QueueRepository {
  async create({ type, context, content }) {
    switch (type) {
      case 'create':
        const message = queue.sendToQueue('queue.create', { type, context, content });

        queue.sendToQueue('queue.log', {
          type,
          context: 'logs',
          description: 'send data to dao',
          timestamp: Date.now(),
        });

        return message;
      default:
        break;
    }
  }
}

module.exports = new QueueRepository();
