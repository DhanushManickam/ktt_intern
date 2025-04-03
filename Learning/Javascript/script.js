// alert("Hello");
// alert("world");

"use strict";

// variable

let a = 20;
console.log(a);

{
    var b = 20;
}
var $c = 30;
console.log(b, $c);

const d = 40;
console.log(d);

var _e = a;
console.log(_e);

// Data Type
// typeof to find the data type

// types (2) primitive Datatype
console.log(typeof(a));
console.log(typeof("a"));
console.log(typeof(true));
var f = null;
console.log(typeof(f));
let h;
console.log(typeof(h));

//non primitive Datatype
let obj ={
    name:"Dhanush",
    age:21
}
console.log(obj);
let arr = [1,2,3,4,5];
console.log(arr);
console.log(typeof(arr));
console.log(typeof(obj));

// functions

firstfucntion()

function firstfucntion(){
    console.log("This is my first function");
}

add(a, b);
function add(a,b){
    console.log("A+B="+(a+b));
}

// let val;
// val = confirm("Would you like to quit?")

// if(val){
//     alert("Bye")
// }
// else{
//     alert("Continue your work")
// }

// let age;
// age = prompt("Enter your age to continue:")
// if(age > 10){
//     alert("welcome")
// }
// else{
//     alert("Your are not allowed to this side")
// }

// type convertion
// String

console.log("Hello"+5);
console.log("4"+5);
console.log("The value is"+true);

// Number convertion

let con = "23423";
console.log(Number(con));

//Boolean converting
let bool = "val";
console.log(Boolean(bool));
let bool1;
console.log(Boolean(bool1));



// Operators
console.log("3" + 2);
console.log("3" - 2);
console.log("6"/"2");
let p = 5;
console.log(p++);
let q = p;
console.log(++q);

let r = -1;
console.log(-r);

let apple = "2";
let orange = "3";
console.log(apple + orange);
console.log(+apple + +orange);
console.log(34 % 4);
console.log(2 ** 23);

// Comparison operator
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != "10");
console.log(10 !== "10");
console.log(10 < "10");
console.log(10 <= "10");
console.log(10 > "10");
console.log(10 >= "10");
console.log(true == 1);
console.log(false === 0);
console.log(null == undefined);

//If else
let data = false;

if(data){
    console.log("It is true");
}
else{
    console.log("It is False");
}

let age = 20;
let age1 = (age > 18) ? true : false;
console.log("Age is greater than 18"+ age1);

let val = 10;
if(val == 10){
    console.log("equal");
}
else if( val < 10){
    console.log("smaller");
}
else{
    console.log("Greater");
}

let check = (val == 10) ? "equal":(val < 10) ? "Smaller" : "Greater";   

// logical statement
let hour = 12;
let weekend = false;

if(hour <= 12 && weekend){
    console.log("Office is closed");
}
else{
    console.log("Office is open");
}

let c1 = true;
let c2 = false;
if(c1 && c2){
    console.log("I like both color");
}
else if(c1 || c2){
    console.log("I like one of the color");
}
else{
    console.log("I don't like both color");
}

// Switch case

a = 12;
switch(a){
    case 1: 
        a;
        break;
    case 12:
        a;
        break;
}
a = 2;
switch(a){
    case 1: 
        a;
        break;
    case 12:
        a;
        break;
}
switch(a){
    case 1: 
        a;
        break;
    case 12:
        a;
        break;
    default:
        "Value not match";
        break;
}
// Looping

// For Loop
let array = [1,2,3,4,5];
for (let i = 0; i < array.length; i++){
    console.log(array[i]);
}

// While loop
let i = 0;
while(i < array.lenght){
    console.log(array[i]);
    i++;
}

// do while
do{
    console.log(array[i-1]);
}
while(i < array.lenght)

// in and of loop for object and array

let objarr = [{name : "Dhanush", age:21},{name:"Obuli" , age :22}, {name:"Siva" ,age:22}]

for(let datas of objarr){
    console.log(datas);
}

let object = {name :"Dhanush", age :21 , class:"A", Dept :"cse"}
for(let datas in object){
    console.log(datas);
}

for(let datas in object){
    console.log(object[datas]);
}


// Mocha Automated testing
function add(v1, v2) {
    return v1 + v2;
}
module.exports = add;

// Object Data type

let person = {name : "Dhanush" , age : 21, Collage:"KIOT", Dept:"CSE",YOP: 2025};

// object display
console.log(person.name);
console.log(person['name']);

// Adding new data
person.country = "India";

// Delete Existing data
delete person.YOP;

// object methods
const person1 = {
    name: 'John',
    age: 25,
    sayName() {
      console.log("Hello "+this.name);
    }
  };
  
  person1.sayName();

//   Function based object creation

const createobject = (name ,age) =>{
    const object1 = {name,age};
    return object1;
}
const Dhanush = createobject("Dhanush", 21);
console.log(Dhanush);

// Getter and Setter methods

const person2 = {
    Firstname : "Dhanush",
    lastname : "Manickam",
    get fullname(){
        return this.Firstname+" "+this.lastname;
    }
}
console.log(person2.fullname);

const person3 = {
 set fullname(name){
    const[firstname, lastname] = name.split(' ');
    this.firstname = firstname;
    this.lastname = lastname;
 }
}
person3.fullname =  "Dhanush Manickam";
console.log(person3.firstname);
console.log(person3.lastname);


// in operator to check existing of value or not
console.log("name" in object);

// reference of the object 
let obj1 = {office :"KTT", Place:"CBT"};
let obj2 = obj1;
console.log(obj2);

// comparision
console.log(obj1 == obj2);
console.log(obj1 === obj2);

let obj3 = {};
let obj4 = {};
console.log(obj3 == obj4);
console.log(obj3 === obj4);

// cloning of object
let clone = {};

for (let key in obj1){
    clone[key] = obj1[key];
}
console.log(clone);

let clone1 = structuredClone(clone);

// merge of objects 
Object.assign(obj1,person);
console.log(obj1);

// Method 
let obj5 = {
    name : "Obuli",
    greet : function () {
        console.log("Hello");
    }
};
obj5.greet();

// Arrow functions have no “this”
let obj6 = {
    name : "Obuli",
    valuename : ()=>{
        console.log(this.name);
    }
}
obj6.valuename();

// Object create using new
const obj7 = new Obj7 ("Dhanush");
function Obj7(name) {
    this.name = name,
    this.isstudent = false;
}
console.log(obj7);
const obj8 = new Obj7 ("Sanjay");
function Obj7(name) {
    this.name = name,
    this.isstudent = false;
}
console.log(obj8);

// Constructor return type

const obj9 = new Obj9();
function Obj9(){
    this.name = "Dhanush"
    return {name :"Sanjay"};
}
console.log(obj9);

const obj10 = new Obj10();
function Obj10(){
    this.name = "Dhanush"
    return;
}
console.log(obj10);

function User(name) {
    this.name = name,
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let dhanush = new User("Dhanush");
  
  dhanush.sayHi()

  let res = obj2?.DOB;
  console.log(res);

  let res1 = obj2?.name;
  console.log(res1);

// Symbol in object 
let email = Symbol();
let obj11 = {};
obj11.name ="Dhanush";
obj11.id = 12;
obj11[email] = "2k21cse017@kiot.ac.in";

console.log(Object.keys(obj11));

// symbol in real time

const service = Symbol("service");
const truck = (name)=>{
    return {
    name,
    [service] : [],

    setservice(date, name){
        this[service].push({name : name,date});
    },
    
    getservice(){
        console.log(this.name);
        console.log(this[service]);
    }
}}

const volvo = truck("volvo");
volvo.setservice("2025-03-14", "oil service");
volvo.setservice("2025-03-25", "engin service");

volvo.getservice();

const truck1 = new trucks("Volvo", "Volvo FM", "12-03-2025");

function trucks(name, model, obdate){
    this.name = name;
    this.model = model;
    this.obdate = obdate;
}
console.log(truck1);

// prototype objects

trucks.prototype.curloc = "Salem";
const truck2 = new trucks("volvo", "Volvo fm","12-03-2025");

// trucks.prototype = {curloc : "Coimbatore"};
console.log(truck2);
console.log(truck2.curloc);

// access methods
console.log(truck1.name);

console.log(truck1['name']);

console.log(Object.keys(truck1));

console.log(Object.values(truck2));

for(let data in truck2){
    console.log(data +":"+ truck2[data]);
}

console.log(Object.entries(truck2));

// convertion object to primitive

const convert = {
    [Symbol.toPrimitive](hint){
    if (hint === "string") return "Hello";
    if (hint === "number") return 32;
    return null;
}
};
console.log(String(convert));
console.log(Number(convert));
console.log(convert + 23);
console.log(convert);

const obj12 ={
    name : "KTT",
    age : 12,
    toString(){
        return this.name;
    },
    valueOf() {
        return this.age;
    },
}
console.log(String(obj12));
console.log(Number(obj12));

console.log(obj12 + " Solution")

    