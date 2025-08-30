// Two Methods of Ceating a Object

// literals // function Constructor


//1. literals Method

let jsuser = {
    name: "Nilesh", // string
    age: 19,        // number
    City: "Pune",
    email: "nilesh@gmail.com",
    isLoggedIN : true, // Boolean
    time :12.30, // float
    isLoggedOFF :{Mon:10.00,Tue:11.00,wed:11,Thu:9}, // object
    offDays : ["Sun","sat",] // array
}

console.log(jsuser["name"]);// access the objects value
console.log(jsuser["age"]);
console.log(jsuser.name); // using .dot method 

// How to use symbol as a key in object


const mysym = Symbol("key"); //  1st symbol created 

const sym2 = Symbol("key2") //  2nd symbol created


let newuser = {
[mysym] : "This is First key", // use as a key using [ ]
[sym2] : "THis is Second key", 
name  : "john Doe",
age : 20,
Language:["HTML","CSS","Javascript","Node.js"],
}

console.log(newuser["name"]) 
console.log(newuser.name)  
console.log(newuser[mysym]) 
console.log(typeof (mysym))
console.log(newuser[sym2])
console.log(typeof(sym2)) 

// change the Object value using =

newuser.name = "Nilesh gaikwad",
newuser.age = 25,

console.log(newuser.name) // Output : changed 
console.log(newuser.age) 


// How to freeze/ Lock the object  value

Object.freeze(newuser)  
newuser.name = "John Doe" // Now we can not change the object

console.log(newuser)

// Use Function


newuser.greeting = function(){

    console.log("hello, developer");
}


newuser.greetingTwo = function(){

    console.log(`hello user,${this.name}`) // using backtick i.e string interpolation

}

// console.log(newuser.greeting) // undefine
// console.log(newuser.greetingTwo) // undefine



//  2. Constructor Method 

const userone = new Object() // This singleton object

// const userone = {} // This is Non-singletone object

userone.id = "abc123"
userone.name = "NameSurname"
userone.age = 24
userone.city = "pune"

console.log(userone)
console.log(userone["id"])
console.log("age :",userone.age)

// we can multile object inside the one object


let apkuser = {
    username : {
        fullname :{
            firstname :"Nilesh",
            Middlename : "Nivrutti",
            Surname : "Gaikwad",
            }
        }
    }
 console.log(apkuser);
 console.log(apkuser.firstname); //Undefine
 console.log(apkuser.username.fullname.Middlename);


//  merge the multiple object

let obj1 = {a:1,b:2};
let obj2 = {c:3,d:3};

// let obj3 = Object({},obj1,obj2); //{} empty object

let obj3 = Object.assign({},obj1,obj2); // It gives combine result using Object.assign and empty {}

console.log(obj3)

 //Spread Object


spobj = {...obj1, ...obj2}; // we merge directely  using spread

console.log("Spread Obj :",spobj)



// Destructring of an object and what is jason

//It allows you extract properties from object and assign to them to variable

let  myobject = {
    name: "Nilesh gaikwad",
    age : 25,
    value : false,
    position : " as a MERN Stack Developer",
    other : "Consistency is a kay",
}

const {name,age,value,position,other} = myobject // Destructring - const {keys} = object literal

console.log("check destructring : ",myobject)
console.log(name);
console.log(age);
console.log(value);
console.log(position);
console.log(other);


const yourobj = {} // object created by consstructor method

yourobj.name = "Rahul Kumaar",
yourobj.age  = 29,
yourobj.location = "pune"
yourobj.time = true,

console.log("check destructring : ",yourobj)

var {location,time} = yourobj

console.log(location);
console.log(time);

const oneres  = yourobj.name = "KK"

console.log(oneres);

let nametwo = Object () // Object created by constructor method(singleton)



nametwo.name = "SUDHIR YADAV MM",
nametwo.age  = 57,
nametwo.adress = "TCS",
nametwo.loggedtime = false

let {adress,loggedtime } = nametwo 

console.log(adress,loggedtime);
console.log(loggedtime);




// example for practice 

const sym = Symbol("Pro-file"); // Symbol create symbol as a key 



let Detail = {
    name :"john",
    age : 20,
    Location : "Mumbai",
    work : function() {  // by use of function
        console.log("I am a Developer");
    },
    [sym]: "This is the Job Profile",
}
 
Detail.work(); // calling the function
console.log(Detail["age"]);
console.log(Detail["name"]);
console.log(Detail.Location);
console.log(Detail[sym]); // calling the symbol
console.log(Detail);


let Employee = {
    name : "Nilesh",
    age : 25,
    City : "pune",
    contact : 123456789,
    greet : function(){
        console.log("Hello, Developer my name is "+ this.name + "!")
    }
}
 
Employee.greet(); // function calling
