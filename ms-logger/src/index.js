const queue = require('./queue');

console.log('⚡ Manager started');

queue.consume('queue.log', message => {
  const parsedMessage = JSON.parse(message.content.toString());

  queue.sendToQueue('queue.dao', parsedMessage);

  console.log('[MANAGER] Encaminhado ao DAO')
})
