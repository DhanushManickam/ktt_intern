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

console.log("Driver list", driver);

driver[2] = {
    name : "Veera",
    lic_num : "MH01202311234123",
    Address : "Salem", 
    EXP : 12, 
    Num_of_load: 209,
}

driver.push({
    name : "Kavin",
    lic_num : "SH01202311234133",
    Address : "Namakkal", 
    EXP : 19, 
    Num_of_load: 803,
})

driver.unshift({
    name : "Selva",
    lic_num : "SH01202311234133",
    Address : "Madurai", 
    EXP : 7, 
    Num_of_load: 305,
})

console.log("After Insertion of multiple drivers:" , driver);

driver.shift();
driver.pop();
driver.splice(1,1);

console.log("After deletion of multiple drivers", driver);

for(let val of driver){
    val.office = "Coimbatore";
    val.load_detail = [];
}

console.log("Office add to all the driver" , driver);

driver[0].load_detail.push(
{
    src : "Madurai",
    des : "chennai",
    date_of_load: "12-03-2024",
    date_of_reach: "14-03-2024",
    time_taken : "45 hrs : 35 min",
    load_type : "vehical"
},
{
    src : "coimbore",
    des : "chennai",
    date_of_load: "18-03-2024",
    date_of_reach: "20-03-2024",
    time_taken : "40 hrs : 00 min",
    load_type : "vehical"
},
{
    src : "chennai",
    des : "salem",
    date_of_load: "20-03-2024",
    date_of_reach: "21-03-2024",
    time_taken : "21 hrs : 35 min",
    load_type : "Spare parts"
})

driver[1].load_detail.push(
{
    src : "Madurai",
    des : "chennai",
    date_of_load: "12-03-2024",
    date_of_reach: "14-03-2024",
    time_taken : "45 hrs : 35 min",
    load_type : "vehical"
},
{
    src : "coimbore",
    des : "chennai",
    date_of_load: "18-03-2024",
    date_of_reach: "20-03-2024",
    time_taken : "40 hrs : 00 min",
    load_type : "vehical"
},
{
    src : "chennai",
    des : "salem",
    date_of_load: "20-03-2024",
    date_of_reach: "21-03-2024",
    time_taken : "21 hrs : 35 min",
    load_type : "Spare parts"
})

driver[2].load_detail.push(
{
    src : "Madurai",
    des : "chennai",
    date_of_load: "12-03-2024",
    date_of_reach: "14-03-2024",
    time_taken : "45 hrs : 35 min",
    load_type : "vehical"
},
{
    src : "coimbore",
    des : "chennai",
    date_of_load: "18-03-2024",
    date_of_reach: "20-03-2024",
    time_taken : "40 hrs : 00 min",
    load_type : "vehical"
},
{
    src : "chennai",
    des : "salem",
    date_of_load: "20-03-2024",
    date_of_reach: "21-03-2024",
    time_taken : "21 hrs : 35 min",
    load_type : "Spare parts"
})
console.log("Nested array of load detail of each drive1", driver[1].load_detail);

let c = 1;
for(let val in driver){
    console.log(`Driver${c}: `, driver[val]);
    c++;
}

driver[1].load_detail.splice(2, 1 , {
    src : "chennai",
    des : "kerala",
    date_of_load: "20-03-2024",
    date_of_reach: "24-03-2024",
    time_taken : "100 hrs : 05 min",
    load_type : "Spare parts"
})
console.log("After changing the load details to driver 2", driver[1]);

[driver[1], driver[0], driver[2]].forEach(value => {
    console.log("foreach Loop of printing values",value);
});

let driver1 = driver.find(value => driver.name = "Dhanush");
let driver1index = driver.findIndex(value => driver.name = "Dhanush");

driver1.EXP = 16;
driver[driver1index].Num_of_load = 1083;

console.log("Accessing index or sepecific value and chaged the content:" , driver[driver1index]);

const Num_of_load = driver.map(value => value.Num_of_load);

let total_loads = Num_of_load.reduce((val1, val2) => val1 + val2, );
console.log("total load buy all the drivers" ,Num_of_load,"\nTotal load of all drivers:",  total_loads);

let min_exp = driver.filter(value => value.EXP <= 12);

console.log("Drivers with and below 12 years experience:" , min_exp);

console.log("Load detials in increasing order:" , Num_of_load.sort((a , b)=> a-b));
console.log("Load detials in decreasing order:" , Num_of_load.sort((a , b)=> a-b).reverse());
console.log("Load detials in decreasing order:" , Num_of_load.sort((a , b)=> a-b).reverse().join("->"));

console.log("Is driver details are array?", Array.isArray(driver));

let arr = [1,2,3]; 
arr[12] =34;
arr[45] = 55;
arr[72] = 77;
arr[100] = 38;
let c1 = 0;
let v = 0;
for(let value of arr){
    if(value){
        arr.splice(0,40)
        c1 = 0;
    }
    else {
        c1++;
    }
    v++;
}
console.log(arr.length);
console.log(arr);