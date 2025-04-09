function Hello (){
    console.log("Message in hello function: Hai");
}
Hello();
console.log("Access the Name property:", Hello.name);

console.log("Finding length of funtion", Hello.length);

let Driver = {
    driver1 : {
        name :"Dhanush",
        EXP : 23,
    }
}
let Truck = {
    truck1 :{
        name:"Volvo",
        model : "Volvo FM",
        drive : Driver.driver1,
    }
}

newTruck.counter = 2;
function newTruck(name, model){
    Truck[`truck${newTruck.counter++}`] = {
        name : name,
        model : model,
        drive : Driver.driver1
    }
}

newTruck("volvo", "Volvo HFM");
newTruck("volvo", "Volvo HFM");
console.log("USing of custom property", Truck);

counter = 2;
let adddriver = function add(name, EXP){
    if(name){
        Driver[`driver${counter++}`] = {
            name : name,
            EXP : EXP
        }
    }
    else{
        add("Guest", 0);
    }
}
adddriver("Siva", 12);

console.log("After adding new Driver", Driver);

let driverlist = new Function('Driverdata', 'return Driverdata');
console.log("Accessing driver list", driverlist(Driver));

function add(val){
    return function(val1){
        return val + val1;
    }
}
let addition = add(30);
console.log("Using closer method to access the inner function", addition(40));
// console.log(add(40)(20))