const myIterator = {
    current : 1,
    last : 5,

    next(){
        if(this.current <= this.last){
            return{ value : this.current++, done:false}
        }
        else{
            return {value : undefined, done:true}
        }
    }
}
console.log("First custom iterator");
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

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

 const iterator = driver[Symbol.iterator]();

 let res = iterator.next();
 while(!res.done){
    console.log(res);
    res = iterator.next();
 }

 const driverdata = {
    [Symbol.iterator](){
        let index = 0;
        return {
            next: () => {
                if (index < driver.length) {
                    return { value: driver[index++], done: false };
                }
                return { done: true };
            }
        }
    }
 }
 for(let value of driverdata){
    console.log(value);
 }