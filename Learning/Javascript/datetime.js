let Truck = {
    truck1 : {
        brand : "volvo", 
        load_start_details: [], 
        load_end_details:[],
        service_details : []
    },
    truck2 : {
        brand : "volvo", 
        load_start_details: [], 
        load_end_detils:[],
        service_details : []
    },
    truck3 : {
        brand : "volvo", 
        load_start_details: [], 
        load_end_detils:[],
        service_details : []
    },
    truck4 : {
        brand : "volvo", 
        load_start_details: [], 
        load_end_detils:[],
        service_details : []
    }
}
function loadstart(name , date){
    Truck.truck1.load_start_details.push({Name: name, Date: date});
}
let lname //= prompt("Enter the load name :");
let lsdate = new Date();
loadstart(lname, lsdate);

console.log(Truck.truck1.load_start_details);

function loadend(name , date){
    Truck.truck1.load_end_details.push({Name: name, Date: date});
}
let lename //= prompt("Enter the load name :");
let ledate = new Date(); 
loadend(lename, ledate);

console.log(Truck.truck1.load_end_details);

Truck.truck1.service_details.push( {
    name : "Oil service",
    Date : new Date(2024, 11, 30),
},
{
    name : "Engin service",
    Date : new Date(2025, 1, 23, 12 , 40, 1),
},
{
    name : "Oil service",
    Date : new Date(2025, 2, 2),
},);

console.log("Truck 1 Service details:", Truck.truck1.service_details);

console.log("Date of oil service for Truck1:",  Truck.truck1.service_details[0].Date.getDate());
console.log("Year of oil service for Truck1:",  Truck.truck1.service_details[0].Date.getFullYear());
let truck = Truck.truck1;
console.log(truck.brand,"Load 1 timing:", (truck.load_start_details[0].Date.getTime() -  truck.load_end_details[0].Date.getTime()) ) ;

// Json
const replacer = (key, value) => {
    if (key === "load_start_details"|| key === "load_end_details") return undefined; 
    return value;
  };
let Datedetail = JSON.stringify(Truck ,replacer);
console.log("After convertion type of Json file:",typeof(Datedetail));

let Truckdetail = JSON.parse(Datedetail ,(key, value) => {
    if (key === "Date" ) return new Date(value);
    return value;
  });
console.log("After parsing the Data will the actual type of ",typeof(Truckdetail));

console.log("After parsing the truck 1 details");
let a = Truckdetail.truck1;
console.log(a);

console.log(a.service_details[0].Date.getDate());