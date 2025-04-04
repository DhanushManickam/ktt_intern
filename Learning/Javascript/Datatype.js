// Data types
// 7 primitive data types

let val1 = 1;
let val2 = "Hello";
let val3 = 12312412n;
let val4 = true;
let val5 = null;
let val6;
let val7 = Symbol("description");

// Numbers
let amount = 1000000;
console.log(amount);

amount = 10_00_000;
console.log(amount);

amount = 1e6;
console.log(amount);

let sec = 0.000001;
console.log(sec);

sec = 1e-6;
console.log(sec);

// hexa 0x

let val = 0xff;
console.log(val);

// binary 0b
val = 0b11111111;
console.log(val);

// octal 0o
val = 0o377;
console.log(val);

console.log(0b11111111 === 0xff);

// tostring methods
let num = 255
console.log(num.toString(16));
console.log(num.toString(2));
console.log(num.toString(8));

// Rounding
let v1 = 1.3;
let v2 = 1.5;
let v3 = 1.7;
let v4 = -1.3;

console.log(Math.floor(v1)+" "+ Math.floor(v2)+" "+Math.floor(v3)+" "+Math.floor(v4));
console.log(Math.ceil(v1)+" "+ Math.ceil(v2)+" "+Math.ceil(v3)+" "+Math.ceil(v4));
console.log(Math.round(v1)+" "+ Math.round(v2)+" "+Math.round(v3)+" "+Math.round(v4));
console.log(Math.trunc(v1)+" "+ Math.trunc(v2)+" "+Math.trunc(v3)+" "+Math.trunc(v4));

let v5 = 23.23923232;
console.log(v5.toFixed(2));
console.log(v1.toFixed(3));

console.log((0.4 + 0.5) == 0.9);
console.log( (0.28 * 100 + 0.14 * 100) / 100);
console.log(999999999999999999);

// isfinite and isNan

console.log(!isNaN(v3));
console.log(NaN == NaN);
console.log(isFinite(v2));
console.log(isFinite(Infinity));
console.log(isFinite("String"));

// ParseInt and parsefloat we can able to set the base limit to convertion
let val8 = "23.8px";
console.log(val8);
let v6 = parseFloat(val8);
console.log(v6);

val8 = "30px";
console.log(val8);
v6 = parseInt(val8);
console.log(v6);

// other function
 let rand = Math.random();
 console.log(rand);

 let pow = Math.pow(2, 10);
 console.log(pow);

 console.log(pow == (2**10))

 let min = Math.min(12, 423, 231, 1, 4);
 console.log(min);

let max = Math.max(23, 323, 34, 321);
console.log(max);

// Strings
let s1 = 'single quotes';
let s2 = "double qoutes";
let s3 = `backticks`;

// usage of backticks

let a = 10;
let b = 2;
function sum(a, b){
    console.log(`${a} + ${b} = ${a+b}`);
}
sum (a, b);

let val9 = `Interns:
* Dhanush
* Obuli
* Ajith`

console.log(val9);

// Printing same the thing with the help of \n

val9 = "Interns: \n * Dhanush \n * Obuli \n * Ajith";
console.log(val9);
console.log("Hello all \tI am Dhanush from \r\n \"K T Telematic Solution\"")

// Methods
// length
console.log("HAI".length);

let str = "Good Morning";
// Character
console.log(str[2]);
console.log(str.at(2));
console.log(str.at(-3));

for(let char of str){
    console.log(char);
}

// case
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Search of Substring
console.log(str.indexOf("Good"));
console.log(str.indexOf("Morning"));

let str1 = 'As sly as a fox, as strong as an ox';
let target = 'as';
let pos = 0;
while (true) {
  let foundPos = str1.indexOf(target, pos);
  if (foundPos == -1) break;
  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1;
}

// includes , endswith, startswith
console.log(str1.includes("fox"));
console.log(str1.endsWith("ox"));
console.log(str1.startsWith("As"));

// Substring
console.log(str.slice(0, 4));
console.log(str.substring(0, 4));
console.log(str.substr(0, 4));


// codepointAt()
console.log("a".codePointAt(0));
console.log("Z".codePointAt(0));
console.log("Z".codePointAt(0).toString(2));

// fromCodePoint()
console.log(String.fromCodePoint(90));

// Array
let arr1 = [];
let arr2 = new Array();

arr1[0] = "Dhanush";
arr1[1] = "Ajith";
arr1[2] = "Obuli";

console.log(arr1);
console.log(arr1[0]);
arr1[1] = "Pragushpathi";
console.log(arr1[1], arr1.length);

// element access
console.log(arr1[arr1.length -1]);
console.log(arr1.at(-1));

// Push, pop, shift

arr1.push("Ajith");
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift("Dhanush");
arr1.unshift("sanjay");
console.log(arr1);

let fruits = ["Banana"]
let arr = fruits; 
console.log( arr === fruits );
arr.push("Pear"); 
console.log( fruits );

// Loop
for (let fruit of fruits) {
    console.log( fruit );
  }
console.log(String(fruits));

let t1 = 100000;
let t2 = "1000a000as";
console.log(t1 + Number(t2));

// octal number for file access

const fs = require('fs');
fs.stat("new.txt", (err, stats) => {
    if (err) throw err;
    console.log(`Permissions: ${stats.mode.toString(8)}`);
});