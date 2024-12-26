"use strict"; //treat all js code as a newer version
// alert (3+3)  // alert function we are using nodejs,not browser

console.log(3
+
3) // code readability should be high

console.log("Nilesh") // e.g of code Readability


// Datatypes in js

let name = "Nilesh" //string
let age = 20  //Numbers
let isLoggedIn = false //Boolean
let mystate = ""
let state; // undefine


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique mostely use in React





// practice: Datatype



// Datatypes in JavaScript.

//string datatype

let mystring = "Nilesh" 
console.log(mystring)

console.log(typeof(mystring))

// Number Datatype

let mynumber = 10;

console.log(mynumber)
console.log(typeof(mynumber))

//Boolean datatype

let booleanvalue = true;

let x = 10;
let y = 20;
 
console.log(x<y)
console.log(x==y)
console.log(x>y)
console.log(booleanvalue)
console.log(typeof(booleanvalue))

// array datatype

let myarray = [1,2,3,4,5,6,7,8];

console.log(myarray)
console.log(typeof(myarray))

//Null datatype

let nullexample = null; 

console.log(nullexample)
console.log(typeof(nullexample))

 // function Datatype

let functionExample = function() {Name ="Nilesh"}; 
let Name = function() {return "Namrata"}; //We create a variable functionExample and assign it a function that returns the string "Namrata!"

console.log(functionExample)
console.log(Name)
console.log(typeof(functionExample))

let Example = function() { return "Hello!"; };
console.log("Type of functionExample:", typeof Example); // function

// undefined Datatype

let car;    // Value is undefined, type is undefined

console.log(car) //Undefine print
console.log(typeof car)

//symbol Datatype

let symbolExample = Symbol('symbol');  // Symbol
console.log("Type of symbol Example:", typeof symbolExample);


//BigInt Datatype

let z = BigInt("94924404048383384989893398903907298"); // All JavaScript numbers are stored in a 64-bit floating-point format

console.log(z)
console.log(typeof(z))

//Object Datatype

let object1 = {name:"Nilesh",age:23};

console.log(object1)
console.log(typeof object1)


// Data Type Opearations

//Arithmatic Operation


//Addition

let a = 10;
let b = 20;
let c = a+b;

console.log(c)

//subtraction

let nilesh = 20;
let manoj = 100;
let subtract = manoj-nilesh

let n = 1988;
let m = 1000
let newsubtract = m-n

console.log(newsubtract)


// Multiplication 

var mul1 = 100;
var mul2 = 200;

var result = mul1*mul2;

console.log(result)
console.log(typeof result)


// Devision

const div1 = 25;
const div2 = 5;
const divresult = div1/div2;

console.log(divresult)


// The modulus operator (%) returns the division remainder. 

let p = 111;
let q = 100;

let resultofpq = p%q; // Remainder

console.log(resultofpq)

// The increment operator (++) increments numbers.

 let v = 29;
 v++;
 let resultv = v;

 console.log(v)


 //The decrement operator (--) decrements numbers.

let d = 41;
d--;
console.log(d)


// The exponentiation operator (**) raises the first operand to the power of the second operand.

let tt = 2;
let zz = tt**5;

console.log(zz)

