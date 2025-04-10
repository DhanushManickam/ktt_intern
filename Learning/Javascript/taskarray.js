const { drivers, trucks } = require('./real_time_tn_dataset');

console.log("Total number of driver : ", drivers.length);
let counter = 0;
let summary = drivers.map((driver) => {
    return driver.tripHistory;
})

console.log("Summary of all trip:",summary);

console.log(summary[0]);
console.log("before",drivers[0].tripHistory[0]);

summary[0][0].deliveryFeedback.clientRating = 43;

console.log("After",drivers[0].tripHistory[0]);
return;


let undermaintance = trucks.filter(truck=> truck.status === "maintenance");
console.log(undermaintance);

let trkofdri20 = trucks.find(truck => truck.driverId === "D020")
console.log("Driver 20 driving the truck of", trkofdri20);

const sortedTrucks = trucks.sort((a, b) => b.capacityTons - a.capacityTons);
console.log("Sorted by capacity (desc):", sortedTrucks);

let totaltrip = drivers.reduce((sum , driver) => sum + driver.tripHistory.length,0 );
console.log("Total number of trip all drivers:", totaltrip);

for(let driver of drivers){
    console.log(`${driver.name} has a learned the course ${driver.training.lastCourse.name}`)
}

drivers.forEach(driver => console.log(`${driver.name} assigned to ${driver.assignedTruckId}`))

for(let i = 0; i < trucks.length; i++){
    if(trucks[i].status === "maintenance" || trucks[i].status === "idle" ) continue;
    else{
        console.log(trucks[i].id ,'->',trucks[i].status)
    }
}

