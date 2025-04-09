let currents = true;
let Truck = {
    name : "Volvo",
    model : "Volvo FM", 
    status : currents,
    gps :[]
}


setTimeout(() => {
    currents = false;
    Truck.status = false;
}, 1000 * 30);

let count = 0;
let interval = setInterval(() => {
        if(!currents){
            clearInterval(interval);
            console.log("After the truck in active the data of truck" , Truck.gps);
            return;
        }
        Truck.gps.push(count)
        console.log("Tracking... Gps",count);
        count++;
}, 5000);

function check(){
    console.log("Truck in active");
    let truckmove = setInterval(() => {
        let current = -1;
        if(!currents){
            clearInterval(truckmove);
            return;
        }
        if(Truck.gps.length > current){
            console.log("Truck is moving");
            current = Truck.gps.length;
        }
    },5000)
    if(!currents){
        clearInterval(timer);
        return;
    }
}

let timer = setInterval(check, 10000);
