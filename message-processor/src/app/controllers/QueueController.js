const QueueRepository = require('../repositories/QueueRepository');

class QueueController {
  async store(request, response) {
    const { type, context, content } = request.body;

    const message = await QueueRepository.create({ type, context, content });

    response.json({ message });
  }
}

module.exports = new QueueController();
