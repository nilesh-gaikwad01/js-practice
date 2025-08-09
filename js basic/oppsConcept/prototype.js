// Prototype 

// we can add new own method for the use using the prototype
//Every object in JS is linked to a prototype

let myName = "nilesh"

// console.log(myName.length);

const heroes = ["thor","Ironman", "captain America"] // Array

//object 

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
    
}

// It create own  object using Object (heroPower → Object.prototype → null)
//  prototype is the base prototype from which almost all objects inherit.

 Object.prototype.hitesh = function (){
     console.log(`Hitesh is present in all object`)
 }
   // It create a array ; once it is craete abd object doen't inherit the array property 

 Array.prototype.nilesh = function (){
    console.log(`Nilesh Present here`)
 }

// heroPower.hitesh();
heroes.hitesh() // array work like plain regular object and access it

// heroPower.nilesh() // TypeError: heroPower.nilesh is not a function;  because heroPower is NOT an array

heroes.nilesh(); // it means only arrays can access it.

//Prototype chain.

//heroPower → Object.prototype → null 
// heroes → Array.prototype → Object.prototype → null


// Inheritance

// __proto__ -  prototype is uses the combining object
// It is called Prototype inheritance

const UserOne = {
    name: "Nilesh zz",
    age : 25,
    isLoggedIn : true
}
const Teacher = {
    makevideo :true
}

const TeachingSupport = {
    isAvailable :false
}

const TASupport = {
    makeAvailable : true,
    fullTime : "yes",

    __proto__:TeachingSupport 
}

// Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


// String

let Username = "Chai aur code    "

String.prototype.trueLength = function (){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`TRUE LENGTH IS : ${this.trim().length}`);
    
}

Username.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();



