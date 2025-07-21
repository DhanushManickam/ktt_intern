const amqp = require('amqplib');
const nodemailer = require('nodemailer');
const {smtp} = require('../config');

async function startConsumer(queue) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();

    await channel.assertQueue(queue, {
        durable: true
    });

    console.log('waiting for email...');

    const transporter = nodemailer.createTransport(smtp);

    channel.consume(queue, async(msg) =>{
        if (msg != null) {
            const data = JSON.parse(msg.content.toString())
            const mail = {
                from: smtp.auth.user,
                to: data.to,
                subject: data.subject,
                text: data.text
            }

            try{
                await transporter.sendMail(mail);
                console.log('Mail send')
                channel.ack(msg);
            } catch (err) {
                console.log("Fail to Email:", err.message)
                channel.ack(msg);
            }   
        }
    }, {noAck: false})
}
module.exports = startConsumer;
