function Print(x){
    if(x == 0){
        return ;
    }
    Print(x - 1);
    console.log(x);
}
console.log("Printing of n number");
Print(10);

function pow (val1, val2){
    if(val2 == 0){
        return 1;
    }
    else{
        return val1 * pow(val1,val2 - 1)
    }
}
console.log("Finding power of two numbers:",pow(5, 7));

const truckLoads = [
    { date: "2024-01-10", load:"Steel Rods" },
    { date: "2024-02-12", load:"Cement Bags" },
    { date: "2024-03-15",load:"Spare Parts" },
  ];
  
function printLoads(index = 0) {
   if (index >= truckLoads.length) return;
   console.log(`Date: ${truckLoads[index].date}, Load: ${truckLoads[index].load}`);
   printLoads(index + 1);
}
console.log("Load History (Oldest to Newest):");
printLoads();
  
const depot = {
    name: "Depot 1",
    branches: [
      {
        name: "Branch A",
        trucks: [
          { lplate: "TN 37 2024", model: "Volvo FM" },
          { lplate: "TN 37 5424", model: "Volvo FH" },
        ],
      },
      {
        name: "Branch B",
        trucks: [
          { lplate: "TN 99 3432", model: "Volvo FE" },
          { lplate: "TN 66 7324", model: "Volvo FE" },
        ],
      },
    ],
  };
  
function findTruck(depot, targetPlate) {
  for (let branch of depot.branches) {
    const found = searchTrucks(branch.trucks, targetPlate);
    if (found) return found;
   }
   return null;
} 
function searchTrucks(trucks, targetPlate, index = 0) {
    if (index >= trucks.length) return null;
    if (trucks[index].lplate === targetPlate) return trucks[index];
    return searchTrucks(trucks, targetPlate, index + 1); 
}
const truck = findTruck(depot, "TN 99 3432");
console.log("Truck Found:", truck);