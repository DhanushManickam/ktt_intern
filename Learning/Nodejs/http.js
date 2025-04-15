const http = require("http");

const fs = require("fs");
const path = require("path");

const server = http.createServer((req , res) =>{
   fs.readFile("../Nodejs/http.html", (err, data)=>{
    if(err){
        res.writeHead(500, {"content-type":"plain/text"});
        res.write("Error loading page");
    }
    else{
        res.writeHead(200, {"content-type":"text/html"});
        res.end(data)
    }
   })
// if(req.method === "GET" && req.url ==="./"){
//     const filepath = path.join("../Nodejs", "http.html")
//     fs.readFile(filepath, (err, data)=>{
//         if(err){
//             res.writeHead(500, {"content-type":"plain/text"});
//             res.write("Error loading page");
//         }
//         else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//     })
// }
})

let port = 4050;
server.listen(port, ()=>{
    console.log("Connection Estrablished");
})