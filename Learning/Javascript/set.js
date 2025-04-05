let driver = [
    {name : "Dhanush",
     lic_num : "MH0120231234567",
     Address : "Salem", 
     EXP : 12, 
     Num_of_load: 132,
 },
    {name : "Siva",
     lic_num : "MH0120231334567",
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
 }]
 
 let License = new Set();
 
 for(let value in driver){
    License.add(driver[value].lic_num);
 }
 console.log("Driver License numbers:", License);

 function newdriver(lic_num){
    if(!License.has(lic_num)){
        License.add(lic_num);
        console.log("---------- \n New Driver added -> " + lic_num);
    }
    else {
        console.log("---------- \n Not a New Driver -> " + lic_num);
    }
 }

 newdriver("MH0120234234567");
 newdriver("MH0189434234567");

 console.log("----------\n" ,License);

 console.log("Number of driver is our company:" , License.size);

 function removedriver(lic_num){
    if(License.has(lic_num)){
        License.delete(lic_num);
        console.log("---------- \n Driver removed \n----------");
    }
    else{
        console("Invalid or not our driver");
    }
 }
 removedriver("MH0120234234567");

//  Weakset in javascript

let status = new WeakSet();

status.add(driver[0]);
status.add(driver[1]);
status.add(driver[2]);

function driverstatus(obj){
    if(status.has(obj)){
        console.log("------------- \n Driver active \n---------------");
    }
    else{
        console.log("------------- \n Driver Inactive \n---------------"); 
    }
}

driverstatus(driver[0]);
 