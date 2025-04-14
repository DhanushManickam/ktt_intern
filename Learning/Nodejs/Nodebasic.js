// // Event looping and Non blocking

// const fs = require("fs");

// console.log("Reading file Data...");

// fs.readFile("../CSS/cssbasic.html", "utf8", (err ,data) =>{
//     if(err){
//         console.error("File Not Found");
//         return;
//     }
//     console.log("File content:");
//     console.log(data);

//     console.log("--------------------------");
// })
// console.log("Move to the next operation...");

// // blocking
// const data = fs.readFileSync("../Javascript/basicjs.html", "utf8");
// console.log(data);

// console.log("Move to the next operation...");

// // callback

// function uname_avail(name, callback){
//     console.log("Checking for availablity of name")
//     username = "user1";
//     if(name != username){
//         callback(null,"username Available")
//     }
//     else{
//         callback("Username already available",null);
//     }
// }

// uname_avail("dhanush",(error, userdata)=>{
//     if(error){
//         console.log("Error:",error);
//         return;
//     }

//     console.log(userdata);
// })

// //promise

// function checkdata(city){
//     return new Promise((resolve, reject)=>{
//         let cities = {
//             salem : 1,
//             coimbatore : 2,
//             chennai : 3
//         }

//         if(cities[city]){
//             resolve(cities[city]);
//         }
//         else{
//             reject();
//         }
//     })
// }
// checkdata("salem").then((value) => {console.log("KTT Branch Number:" ,value)})
// .catch(()=> {console.log("There is no Branch in this city")})

// async function showbranch(city) {
//     try{
//         let data = await checkdata(city);
//         console.log("Branch Number:",data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// showbranch("chennai");

let buffer = Buffer.from("Hello world");
console.log(buffer);
console.log(buffer.toString());

const math = require(`./custommodule`);
console.log("Addition of two number for custom module:", math.add(3, 5));