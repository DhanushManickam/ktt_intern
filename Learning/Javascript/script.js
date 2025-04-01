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
function add(v1, v2) {
    return v1 + v2;
}
module.exports = add;