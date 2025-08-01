const { connect } = require('amqplib');
const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var exchange = 'topic_logs';
        var args = process.argv.slice(2);
        var key = (args.length > 0) ? args[0] : 'anonymous.info';
        var msg = args.slice(1).join(' ') || 'Topic Exchange Message!';

        channel.assertExchange(exchange, 'topic', {
            durable: false,
        })

        channel.publish(exchange, key, Buffer.from(msg));
        console.log('%s ,%s', key, msg);
    })
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, 500);
})