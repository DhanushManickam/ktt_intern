const Truck = {
   truck1 :{
    brand :"Volvo",
    model :"volvo FM",
    year : "2025",
    color : "Blue",
    lplate :"TN 37 2024",
    cntloc :"chennai",
    service : []
   },
   truck2 :{
    brand :"Volvo",
    model :"volvo FH",
    year : "2012",
    color : "Blue",
    lplate :"TN 37 5424",
    cntloc :"salem",
    service : []
   },
   truck3 :{
    brand :"Volvo",
    model :"volvo FE",
    year : "2022",
    color : "Blue",
    lplate :"TN 37 2322",
    cntloc :"chennai",
    service : []
   },
   truck4 :{
    brand :"Volvo",
    model :"volvo FE",
    year : "2022",
    color : "Blue",
    lplate :"TN 37 7832",
    cntloc :"chennai",
    service : []
   },
   truck5 :{
    brand :"Volvo",
    model :"volvo FE",
    year : "2022",
    color : "Blue",
    lplate :"TN 99 3432",
    cntloc :"chennai",
    service : []
   },
   truck6 :{
    brand :"Volvo",
    model :"volvo FE",
    year : "2022",
    color : "Blue",
    lplate :"TN 66 7324",
    cntloc :"chennai",
    service : []
   }
}

Truck.truck1.service.push({
    name : "Oil change",
    date :"12-03-2025"
},
{
    name : "Engine CheckUp",
    date : "14-04-2025"
}
)
console.log("Truck 1 details:",Truck.truck1);

delete Truck.truck3;
console.log("Truck detail after the deletion on truck3", Truck);

Truck.truck3 = {
    brand :"Volvo",
    model :"volvo FH",
    year : "2021",
    color : "Blue",
    lplate :"TN 37 5542",
    cntloc :"Coimbatore",
    service : [{name :"Air filter repalce" , date : "12-03-2025"}]
   };

console.log("Truck 3 details after changed:" , Truck.truck3);

for(let value in Truck){
    Truck[value].mainoff = "Coimbatore";
}

console.log("After add of Main office in all Trucks:", Truck);

let T4 = Truck.truck4;
T4.model = "Volvo FMX";

console.log("Truck 4 after creating the variable to access", T4);

Driver = {
    driver1:{
        name : "Dhanush",
        lic_num : "MH0120231234567",
        Address : "Salem", 
        EXP : 12, 
        Num_of_load: 132,
        truck : Truck.truck1,
    },
    driver2:{
        name : "Siva",
        lic_num : "MH0120231231567",
        Address : "Erode", 
        EXP : 12, 
        Num_of_load: 102,
        truck : Truck.truck4,
    },
    driver3:{
        name : "Ravi",
        lic_num : "MH01202311234123",
        Address : "Salem", 
        EXP : 12, 
        Num_of_load: 209,
        truck : Truck.truck2,
    },
}


console.log("Driver List:", Driver);

Driver.driver2.truck.service.push({name :"Brake Checkup", date:"18-12-2024"});
console.log("Driver 2 truck detials", Driver.driver2.truck);

delete Driver.driver2.EXP;
console.log(Driver.driver2);

for(let value of Object.values(Truck)){
    console.log(value);
}

let truck_list = new Set();
for(let key of Object.keys(Truck)){
    truck_list.add(key);
}

console.log("Entier Truck list", truck_list);

// Destructure Assignment

for(let values in Truck){
    let { brand,model } =  Truck[values];
    console.log("Name of the vehical and model:" ,brand , "->", model);
}

let [value, ...rest] = Truck.truck1.service;
console.log("Name of the Servies", value.name);
console.log("REST DETAILS:",rest);

console.log("---------------");
const {name : driver_name, truck} = Driver.driver1;
console.log("Driver how assigned to Truck:", driver_name, truck);

function connect({dname , tmodel}){
    console.log("-------------------")
    console.log("Driver Name:" ,dname,"\nTruck Model:", tmodel);
    console.log("-------------------")
};
connect({dname: Driver.driver1.name, tmodel :Truck.truck1.model } );