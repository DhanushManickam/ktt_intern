const http = require("http");

const server = http.createServer((req , res) =>{
    res.write("hello");
    res.end();
})

let port = 4050;
server.listen(port, ()=>{
    console.log("Connection Estrablished");
})