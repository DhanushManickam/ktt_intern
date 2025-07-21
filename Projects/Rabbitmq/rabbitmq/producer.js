const amqp = require('amqplib');

async function sendToQueue(queue, message) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)), {
    persistent: true,
  });

  console.log(`Sent to queue: ${queue}`);
  await channel.close();
  await connection.close();
}

module.exports = sendToQueue;
