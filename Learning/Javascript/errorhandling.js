const {drivers, trucks} = require (`./real_time_tn_dataset`);

function assigndriver(driverid, truckid){
    try {
        const driver = drivers.find(drive => drive.id === driverid);
        const truck = trucks.find(t => t.id === truckid);

        if(!driver){
            throw new Error("Driver not found");
        }

        if(!truck){
            throw new Error("Truck not Found");
        }
        console.log(`${truckid} is assigned to the driver ${driverid}`);

    }
    catch(err){
        console.error(`Assignment error: ${err.message}`);
    }

}

assigndriver(1, 53);
assigndriver("D001", "T001");

function newassign(driver, truck){
    try{
        let assign = drivers.find(val => val.id === driver.id && val.assignedTruckId === null);
        let tassign = trucks.find (val => val.id === truck.id && val.driverId === null);

        if(!assign){
            throw new Error("The driver is not avalible on this id");
        }

        if(!tassign){
            throw new Error("Truck is not Found on this id to assign");
        }

        driver.assignedTruckId  = truck.id;
        truck.driverId  = driver.id;
        console.log("Driver assign to the truck");
    }
    catch(err){
        console.error(`Truck Assignment error: ${err.message}`);
    }
}
newassign(drivers[0], trucks[60]);
newassign(drivers[60], trucks[0]);
newassign(drivers[60], trucks[60]);

console.log("Drivers details",drivers[60]);
console.log("Trucks Details" , trucks[60]);

class DriverError extends Error {
    constructor(message) {
      super(message);
      this.name = "DriverError";
    }
}
  
  class TruckError extends Error {
    constructor(message) {
      super(message);
      this.name = "TruckError";
    }
  }

  const drivers1 = [
    { id: 1, name: "Kumar", licenseNumber: "TN09A1234" },
    { id: 2, name: "Mani", licenseNumber: null }
  ];
  
  const trucks1 = [
    { id: "TRK1", available: true },
    { id: "TRK2", available: false }
  ];
  
  function bookTrip(driverId1, truckId1) {
    const driver = drivers1.find(d => d.id === driverId1);
    const truck = trucks1.find(t => t.id === truckId1);
  
    if (!driver) throw new DriverError("Driver not found");
    if (!driver.licenseNumber) throw new DriverError("Driver has no valid license");
  
    if (!truck) throw new TruckError("Truck not found");
    if (!truck.available) throw new TruckError(`Truck ${truckId1} is not available`);
  
    truck.available = false;
    return `Trip booked: ${driver.name} assigned to ${truckId1}`;
  }
  try {
    const result = bookTrip(2, "TRK2");
    console.log(result);
  } catch (err) {
    if (err instanceof DriverError) {
      console.error("Driver Issue:", err.message);
    } else if (err instanceof TruckError) {
      console.error("Truck Issue:", err.message);
    } else {
      console.error("Unknown Error:", err.message);
    }
  }