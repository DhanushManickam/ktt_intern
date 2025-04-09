Driver ={
    id : "dr123",
    name : "Dhanush",
    age : 24,
    EXP : 5,
    loads : 1032
}

function greet(company){
    console.log(`${this.name} welcome to ${company} and Your current loads are ${this.loads}`)
}
function greet1(){
    console.log(`${this.name} welcome to KTT and Your current loads are ${this.loads}`)
}
greet.call(Driver,"KTT");
greet.apply(Driver, ["Hutson"]);

function drprofile(Driver){
    console.log("Driver Profile:", Driver);
}

function access(Driver){
    if(Driver.id != "dr123"){
        console.log("Access denied");
        return;
    }
    drprofile(Driver);
}

access(Driver);

driver1 = {
    driverid : "dr234",
    name : "siva",
    EXP : 23,
    age : 45,
    loads : 4523
}
let greets = greet1.bind(driver1);
greets();

function multiple(a, b){
    return a * b;
}
let multi = multiple.bind(null, 2);
console.log("The value of Multipy 2 and 4 is", multi(4));

// partial function
function warning(name, message){
    return `${name} : ${message}`;
}
let warn = warning.bind(null , "Siva");
console.log("Notification->",warn("Check the Engine oil"));

// function notify(name,location, message){
//     return `${name} -> Location ${location}: ${message} `;
// }
// let warns = notify.bind(null , null, "chennai");
// console.log("Notification->",warns("siva","Check the Engine oil"));


function idvalue(){
    console.log("Id of driver1", this.driverid);
    setTimeout(()=> {
        console.log("Id of driver1", this.driverid);
    }, 1000);
}

idvalue.call(driver1);