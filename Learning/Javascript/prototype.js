const { drivers, trucks } = require('./real_time_tn_dataset');

let vehicle = {
    basic(regno, brand, cap){
        this.regno = regno;
        this.brand = brand;
        this.cap = cap;
    }
}

let Truck = {
    __proto__ : vehicle,
    detail(model){
        this.model = model;
    }
}

let load = {
    __proto__ : Truck, 
    ldetail(name, capacity){
        this.name = name;
        this.capacity = capacity;
    },
    check(){
        if(this.cap < this.capacity){
            return `Load in More than the capacity of ${this.capacity - this.cap}`
        }
        else{
            return "Allowed to Load"
        }
    }
}

load.basic("TN 32 1231","Volvo",25);
load.detail("Volvo FM");
load.ldetail("cement", 26);

console.log("Details of the Truck Brand:" ,load.brand,"Model:",load.model,"Reg_no:",load.regno);

console.log("loading details:", load.check());

for(let prop in load){
    let property = load.hasOwnProperty(prop);

    if(property){
        console.log("own:", prop);
    }
    else{
        console.log("inherited:", prop);
    }
}

let driver1 = Object.create(drivers[0])
console.log("Driver 1 data are inherited to driver1:", driver1.id);

let driver2 = {};
Object.setPrototypeOf(driver2, drivers[1]);
console.log("Driver 2 data are inherited to driver2:", driver2.name);
let copy_d2 = Object.getPrototypeOf(driver2);
console.log("Driver 2 data are inherited to driver2 and get to d2:", copy_d2.name);

function driversal(driver){
    return `${driver.id} -> salary credited : ${driver.salarycrd}`;
}
Salary = {
    salarycrd : true,
}
driversal.prototype = Salary;

let d1 = new driversal(drivers[0]);
console.log("Salary for Driver 1 credited :", d1.salarycrd);

Array.prototype.greet = function (){
    return "Hello deriver";
}

console.log("Custom defined function in array Prototype to greet drivers", drivers.greet());

let data = Object.create(drivers[0]);
console.log("Driver one data by inheriting it:", data.tripHistory);

let val = {};
Object.setPrototypeOf(data, val);
console.log("---------\n Driver detail are not refered so it is " , data.tripHistory);

let obj = Object.create(null);
obj["toString"] = "Test";
console.log("custom defined object property for toString:" ,obj["toString"]);