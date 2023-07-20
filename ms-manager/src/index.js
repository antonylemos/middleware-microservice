const queue = require('./queue');

console.log('⚡ Manager started');

queue.consume('queue.create', message => {
  const parsedMessage = JSON.parse(message.content.toString());

  queue.sendToQueue('queue.dao', parsedMessage);

  console.log('[MANAGER] Encaminhado ao DAO')
})
