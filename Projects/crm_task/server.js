const express = require('express');
const sequelize = require('./config/db');
const path = require('path');
const app = express();
const port = 4050;

app.use(express.json());
app.use(express.static('public'));

const vehicle_route = require('./routes/vehicle_history');
app.use('/', vehicle_route);

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,'./public/html/index.html'));
})
sequelize.sync()
.then(()=>{console.log("DB connected")})
.catch(()=>{console.log("DB does not connected")});
app.listen(port,()=>{
    console.log("Server connected");
})