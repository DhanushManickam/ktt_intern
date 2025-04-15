const express = require("express");
const path = require("path");
const { emit } = require("process");
const {Client} = require("pg");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client = new Client({
    user : 'postgres',
    host : 'localhost',
    database : 'mydb',
    password : 'kiot2003',
    port : 5432
})

client.connect()
.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("error in database connnection");
})

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname,"home.html"));
})

app.get('/about',(req, res) =>{
    res.sendFile(path.join(__dirname,"about.html"))
})

app.get('/main',(req, res) =>{
    res.sendFile(path.join(__dirname,"main.html"))
})

app.post('/submit',(req, res) =>{

    const {name, email, mobile_no} = req.body;

    const query = {
        text : 'insert into users(name, email,mobile_no) values ($1, $2, $3)',
        values : [name, email, mobile_no]
    }

    client.query(query)
    .then(()=>{
        return res.status(200).send("Data successfully inserted into the database");
    })
    .catch((err)=>
    {
        return res.status(500).send(err);
    })
})

app.get('/users', async (req, res) => {
    try {
      const result = await client.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.send('Error fetching users');
    }
  });
  
app.use((req, res) => {
    res.status(404).send(" Page Not Found");
  });
  
const port = 4050;
app.listen(port, ()=>{
    console.log("server is reunning...");
})