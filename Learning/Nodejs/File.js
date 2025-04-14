const fs = require('fs');

fs.readFile("../Nodejs/test.html" ,"utf8", (err, data) =>{
    if(err){
        console.error("File not found");
        return;
    }
    console.log(data)
})

// fs.appendFile("../Nodejs/value.txt", "Welcome to learn Node js", (err) =>{
//     if(err) throw err;
//     console.log("Saved");
// })

// fs.open("../Nodejs/value.txt", 'w', (err)=>{
//     if(err) throw err;
//     console.log("Saved");
// })

const readstr = fs.ReadStream("../Nodejs/test.html", "utf8");

readstr.on("data", (chunk)=>{
    console.log(chunk);
})

readstr.on("end", ()=>{
    console.log("read ending");
})

fs.writeFile("../Nodejs/value.txt", "data store in value text file", (err)=>{
    if(err) throw err;
})

// fs.mkdir("testing_Folder" , (err)=>{
//     if(err) throw err;
//     console.log("Folder created");
// })

fs.readdir("../Nodejs", (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    console.log("📂 Files in current directory:");
    console.log(files);
});
