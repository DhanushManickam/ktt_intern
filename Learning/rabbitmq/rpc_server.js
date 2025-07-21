const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(error0, connection){
    if (error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel){
        if (error1) {
            throw error1;
        }

        var queue = 'rpc_queue';
        
        channel.assertQueue(queue, {
            durable: false,
        })
        channel.prefetch(1);
        console.log('Waiting for request');
        channel.consume(queue, function reply(msg){
            var n = parseInt(msg.content.toString());
            console.log('sqr(%d)', n);
            var r = square(n);
        
            channel.sendToQueue(msg.properties.replyTo, 
                Buffer.from(r.toString()), {
                    correlationId : msg.properties.correlationId,
                }
            )
            channel.ack(msg);
        })
    })
})

function square(n) {
    return n * n;
}