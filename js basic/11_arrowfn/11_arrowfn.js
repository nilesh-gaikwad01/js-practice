// Use of this Function in Javascript
// this keyword use in the object for accessing the properties of the object.

let user = {
    name:"Nilesh",
    sirname:"Laxminivar",
    city :"Pune",
    loggin : function(){
        console.log(`my name is ${this.name}, and my sirname is ${this.sirname}`)
        console.log(this);
    }
}

// user.loggin() // Function call
// user.name = "sam"
// user.sirname = "altman"
// user.loggin()
console.log(this) //It return a empty object { }

// Normal Javascript Function
// this keyword can not use inside the function
//  function chai() { 
//     console.log("Dear ila")
//     // console.log(this.cast) // Undefine- we can't use this inside the function
//  }

//  chai()



// +++++++++++ARROW FUNCTION ++++++++++++


// Arrow Function () => {} 

  const chai = () => { //Arrow Function  with No parameter
    username = "Manav"
    console.log(username)
    }

    chai(); // Function calling

    const greet = (position) => { // Arrow Function with Single parameter
      console.log(`my name is markwt and my position is a web ${position}`)
    }

    greet("Developer"); // Function calling


const addTwo = (num1, num2) => { // Arrow function with Two Parameter
  console.log(`total no :`)
  return num1+num2
  
}

addTwo(5,4); // Function calling
console.log(addTwo(5,4))


// syatax of Arrow Function

//  explicite return Return Must inside this {}

// const one = () => {}

//  implicit return Return is not used inside this ()

// const Two = () => ()

//  Single line Function Execution 

// const Three = () => ...... code here...



// +++++++++++++++++++ Practice ++++++++++++++

// Uses Of Arrow Function

1. // Arrow Function With single parameter

const greets = (name) => ` and Hello my name is ${name} `;

greets("Sam");
console.log(greets("sam"));


2. // Arrow fnction With Multiple Parameter

const add = (a,b) => a+b ;

console.log(add(4,7));


3. // Arrow Function with No parameter

const result = () => `Hello World !`

console.log(result());



4. // Arrow Function with Blocked Body

//{} 

let newUser = (a,b) => { 

//  return a*b
let result = a*b
// console.log(result)
return result
}

newUser(10,20)
console.log(newUser(10,20))

// ()

let twoUser = (wei,hei) => (
  console.log(`Hello This is Second User weight is ${wei} and height is ${hei}`)
)

twoUser(52,5.5) 


5. // Object Used in the Arrow function
 
const Personal = () => ( {name : "Nilesh",age : 25, City: "Pune" })

const res = Personal(); // Function Result stored in the variable

console.log(res); // It Return the Objec
console.log(typeof res); // Object

console.log(Personal); //[Function: Personal]
console.log(typeof Personal); // Function


6. // Using an array inside the arrow function

const myArray = [1,2,3,4,5,6,7,8] // Doubled Array example

const doubled = myArray.map((num) => num * 2 ) 

//map method is used to apply a function to each element of the array.
//an arrow function that takes a single parameter (num), multiplies it by 2, and returns the result.


console.log(doubled); // Doubled the each element of array

// Filtering even numbers

const evens = myArray.filter((num) => num % 2 === 0);

// filter method is used to select certain elements from an array based on a condition.
// This is an arrow function that checks if a number is even.

console.log(evens); // Output: [2, 4]


// 7. IIFE (Immediately Invoked Arrow Function Expression)

// (function Defn)(code Exectution)


(function chai(){    //named IIFE Regular Function
  console.log(`DB CONNECTED`);
} )();

(() => { // Simple IIFE arrow Function
   console.log(`DBCONNECTED`)
})() // ; its imp for writting two IIFI

// Note : if you are writing Two IIFE semicolumn is requied for the code execution i.e connect the both IEFE 


// ((name) => { // Single parameter
//   console.log(`my name is ${name}`);
// })("Nileshwt") // Error due to the 2nd IIFE Semicolumn is not given
 