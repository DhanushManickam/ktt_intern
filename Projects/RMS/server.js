const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const port = 4050;
app.use(express.static('frontend'));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./Frontend/HTML/login.html'));
})

app.get('/candidate', (req, res)=>{
    res.sendFile(path.join(__dirname,'Frontend/HTML/candidates.html'))
})
app.get('/add_candidate', (req, res)=>{
    res.sendFile(path.join(__dirname, 'Frontend/HTML/addcandidate.html'))
})
app.listen(port, ()=>{
    console.log('connection established');
})