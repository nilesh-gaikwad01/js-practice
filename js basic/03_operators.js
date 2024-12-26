// JavaScript Assignment Operators


// Operator      Example   Same As
// =	          x = y	    x = y
// +=	          x += y	x = x + y
// -=             x -= y	x = x - y
// *=             x *= y    x = x * y
// /=	          x /= y    x = x / y
// %=	          x %= y	x = x % y
// **=	          x **= y	x = x ** y


// Assignment (=)

let x = 10;
console.log("value of x:",x)


// Addition operator (+=)

let a = 5;
a +=3;
console.log("value of a:",a)


//subtraction (-=)

let b = 5;
b -=3;
console.log("value of b:",b)

//Multiplication operator (*=)

let c = 7;
c *= 8;
console.log("value of c :",c)

//Division Operator (/=)

let d =  20;
d /= 5;
console.log("value of d:",d)

// Remainder Operator (%=)

let e = 15;
e %=4;

console.log("value of e:",e)


//Exponentiation Operator (**=)

let f = 3;
f **=5;

console.log("value of f :",f)


// Bitwise AND Operator (&=)

let g = 5;
g &= 3;

console.log("value of g:",g) //1


//Bitwise OR Assignment (|=)

let h = 5;
h |=3;

console.log("value of h: ", h) //7

// Bitwise XOR Assignment (^=)

let i = 5;
i ^3;
console.log("value of i:",i) // 

// Left Shift Assignment (<<=)

let j = 5;
j <<=1;
console.log("value of j:",j) //10

// Right Shift Assignment (>>=)

let k = 5;
k >>1;
console.log("value of k:",k) //5

 //Unsigned Right Shift Assignment (>>>=)

let l = 5;
l >>>1;
console.log("value of l:",l) //5

console.log(+true , "hitesh")
console.log(+false)
console.log(+"")

//Datatype Summary

//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

//+++++++++++++++++++++++++++++++++++++++++++++

// Use of stack And Heap memory 

//  Primitive - stack , Non-Primitive - Heap

// stack - When You Declare the variable Then, Stack gave A copy to you.
// Heap - When You Declare the variable Then, Heap gave Referance(Original Value) to you.

let firststackbox = "Nilesh"

let secondbox = "Box2"

console.log(firststackbox)
console.log(secondbox)

// Remember Heap gave referances(Non-Primetive) rather than copy(primitive)





























