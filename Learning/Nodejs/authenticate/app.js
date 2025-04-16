const express = require('express');
const {sequelize} = require('./models');
const userroute = require('./route/user.routes');
const path = require('path')

const app = express();
app.use(express.json());
app.use('/api/users', userroute);

app.use(express.urlencoded({ extended: true })); 

sequelize.authenticate()
.then(()=> console.log("DB connected"))
.catch(() => console.error("Error in db connection"));

app.get('/',(req ,res) =>{
    res.sendFile(path.join(__dirname, 'register.html'));
})

app.post('/newuser',(req, res)=>{
    const{username, password, role} = req.body;
    try{
        user.create(username, password, role);
    }
    catch(err){
        console.error("Error", err);
    }
   
})
app.listen(4050, ()=>{
    console.log("Connection established");
})