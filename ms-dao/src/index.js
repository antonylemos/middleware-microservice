const queue = require('./queue');
const client = require('./database');

console.log('⚡ Manager started');

queue.consume('queue.dao', async message => {
  const { type, context, ...rest } = JSON.parse(message.content.toString());

  try {
    const database = client.db('database');
    const collection = database.collection(context);

    switch (type) {
      case 'create':
        const result = await collection.insertOne({ ...rest })

        if (result) {
          console.log(`[DAO] Inserido na collection ${context}`);
        } else {
          console.log('[DAO] Erro ao inserir no banco de dados');
        }
        break;

      default:
        break;
    }
  } finally {
    console.log('Fim da operação')
  }
})
