let driverdata = {
    driver1:{
        name : "Dhanush",
        lic_num : "MH0120231234567",
        Address : "Salem", 
        EXP : 12, 
        Num_of_load: 132,
    },
    driver2:{
        name : "Siva",
        lic_num : "MH0120231231567",
        Address : "Erode", 
        EXP : 12, 
        Num_of_load: 102,
    },
    driver3:{
        name : "Ravi",
        lic_num : "MH01202311234123",
        Address : "Salem", 
        EXP : 12, 
        Num_of_load: 209,
    },
    driver4 : {
        name: "Arun",
        lic_num: "MH0120231288888",
        Address: "Coimbatore",
        EXP: 5,
        Num_of_load: 90,
      }
}

let driver = new Map(Object.entries(driverdata));

console.log("Inital Insertion of object in map:", driver);

driver.set("driver5", {
        name : "Kumar",
        lic_num : "MH01202311234123",
        Address : "Theni", 
        EXP : 18, 
        Num_of_load: 1030,
})


console.log("Insetion of driver 5 in map :" , driver);

console.log("Checking of driver3 in driver map: ", driver.has("driver3"));

let tempchange = driver.get('driver3');

tempchange.Address = "Palani";

console.log("The address of driver there is changed accessing it:" , driver.get('driver3'))

if(driver.has("driver2")){
    driver.delete("driver2");
}
console.log("After deleting the driver2 data in driver details", driver);
// driver.clear();
// console.log("After clearing the entier data in the driver data:", driver);

c = 6;
function uploadnew(name,lic_num, Address, EXP, Num_of_load){
    driver.set(`driver${c}`, {
        name : name,
        lic_num : lic_num,
        Address : Address,
        EXP : EXP,
        Num_of_load : Num_of_load
    })
    c++;
}

uploadnew("Anbu" , "MH01202311234123", "Madurai" , 23 , 3029);

console.log("Function based insertion of new element of driver6:", driver.get("driver6"));

console.log("looping for driver");
for(let value of driver){
    console.log(value);
}

// driver.forEach((value,key) => {
//     console.log(`${key}`, value);
// });

for(let [key,value] of driver){
    value.load_det = [];
}
console.log("After insertion of new property:");
console.log(driver);

let details = driver.get("driver1").load_det.push = {name:"cotton"};
console.log("After adding load details:",driver.get("driver1"));

// let map = new Map();
// map.set(1, "user1");
// map.set(true, "user2");
// map.set(null, "user3");
// map.set(undefined, "user4");
// console.log("All map input key formats:", map);

let object = Object.fromEntries(driver.entries());
console.log("converting Map to object and dispalyed:", object);

// weak Map
let Privateinfo = new WeakMap();

Privateinfo.set(driverdata.driver1, "DR001");
Privateinfo.set(driverdata.driver2, "DR002");
Privateinfo.set(driverdata.driver3, "DR003");

console.log("Direct access of private element:",Privateinfo);
console.log("Accessing of specific element:", Privateinfo.get(driverdata.driver1));