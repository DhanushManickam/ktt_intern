const amqp = require('amqplib/callback_api');
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: receive_logs_direct.js [info] [warning] [error]");
  process.exit(1);
}

amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) throw error0;

  connection.createChannel(function(error1, channel) {
    if (error1) throw error1;

    const exchange = 'direct_logs';

    channel.assertExchange(exchange, 'direct', { durable: false });

    channel.assertQueue('', { exclusive: true }, function(error2, q) {
      if (error2) throw error2;

      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      args.forEach(function(severity) {
        channel.bindQueue(q.queue, exchange, severity);
      });

      channel.consume(q.queue, function(msg) {
        const log = `[x] ${msg.fields.routingKey}: '${msg.content.toString()}'\n`;

        console.log(log);
      }, { noAck: true });
    });
  });
});
