const MessageRepository = require('../repositories/MessageRepository');

class MessageController {
  async store(request, response) {
    const { sender, description } = request.body;

    if (!sender) {
      return response.status(400).json({ error: 'Sender is required' });
    }

    const message = await MessageRepository.create({ sender, description });

    response.json(message);
  }
}

module.exports = new MessageController();
