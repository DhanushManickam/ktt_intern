function Trucktodriver( Truck, ...drivername){
    console.log("Truck :", Truck);
    console.log("Driver's name:", drivername);
}

Trucktodriver("Volve FM", "Dhanush", "Siva", "Ravi");

function average(...args){
    sum = 0;
    for(let arg of args){
        sum += arg;
    }
    console.log("Average of the Numbers", (sum / args.length).toFixed(2));
}
average(23,323,3,2,1,3,4);

let driver = [
    {name : "Dhanush",
     lic_num : "MH0120231234567",
     Address : "Salem", 
     EXP : 12, 
     Num_of_load: 132,
 },
    {name : "Siva",
     lic_num : "MH0120231234567",
     Address : "Salem", 
     EXP : 12, 
     Num_of_load: 122,
 },
    {name : "Ravi",
     lic_num : "MH0120231232367",
     Address : "Salem", 
     EXP : 20, 
     Num_of_load: 1022,
 },
    {name : "Sanjay",
     lic_num : "MH0123431234567",
     Address : "Salem", 
     EXP : 32, 
     Num_of_load: 2132,
 },
    {name : "Tamil",
     lic_num : "MH0120234234567",
     Address : "Salem", 
     EXP : 12, 
     Num_of_load: 742,
 },
 ]

 let loads = driver.map(value => value.Num_of_load);
 console.log(loads);

let max = Math.max(...loads);
console.log("Maximum load by the drivers", max);

let max1 = Math.max( 3423, 234, 1234,...loads,23);
console.log("Maximum load by the drivers with also manual data entry", max1);