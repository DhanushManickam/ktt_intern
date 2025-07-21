const express = require('express');
const startConsumer = require('./rabbitmq/consumer');
const sendToQueue = require('./rabbitmq/producer');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const queue = 'email_queue';

startConsumer(queue);

app.post('/send_email', upload.none(), async (req, res) =>{
    const {to, subject, text} = req.body;
    try{
        await sendToQueue(queue, {to,subject, text});
        res.status(200).json({ message: 'Email Queued' });
    } catch(err){
        res.status(500).json({ error: 'Internal error' });
    }
})

app.listen(4050, ()=>{
    console.log("Port Connected...")
})