let user = {
    name : "sam",
    age : 29,
    title : function (){
        console.log(`my name is ${this.name},my age is ${this.age}`)
        console.log(this) // { name: 'sam', age: 29, title: [Function: title] }
    }
    
}
user.title() // function call 


console.log(this); // It Return The Empty Object now {}

// notes;

// Inside the Object we use 'this' for accessing the object properties like this.name, this.age
// 'this' keyword return  the 'current context' means value assign to the variable 
// In the node Environment 'this' return '{}' empty Object in the console because global context is a empty Object intitially
// In the Browser environment it return a Windown Object global context is Window object Initially

//i.e console.log(this); // Output: {} and i.e console.log(this) //window object return

// Why does this behave differently in Node.js and the browser?

// - The value of this depends on the execution context (where and how the code is run). Node.js and browsers have different default execution contexts:

1. // Node.js Environment
// In Node.js:

//Why does it return {}?

//- Global this: At the top level, this refers to an empty object {} in a module.
//- Node.js wraps your code in a module wrapper function like this:


//(function(exports, require, module, __filename, __dirname) {console.log(this)});


//- Inside this function, this points to module.exports, which initially is {}.
//- This design isolates modules, ensuring variables and functions don’t pollute the global scope.

// Example - In Node.js
// console.log(this); // Output: {}

//What about this in the global context?

// In Node.js, if you explicitly refer to the global scope using global, you are working with the Node.js global object.
// Example: 
// console.log(global); // Node.js global object


2. // Browser Environment
// In the browser:

// why it return Window object?

//- Global this: At the top level, this refers to the window object.
//- In browsers, the global execution context is the window object, which represents the browser's global scope.
//- Top-level variables and functions automatically become properties of window.

// example:

// console.log(this);// window object

// Why Does This Difference Happen in environment?

// Design Philosophy:
// Node.js focuses on modularity. Code is scoped to individual modules, not the global environment.
// Browsers prioritize a shared global environment where window is central to interaction with the DOM, events, and APIs.

// Execution Environment:
// Node.js wraps code inside a function to isolate modules.
// Browsers execute code directly in the global context.

// Summary of Key Concepts


// this in Node.js:
// In modules: Refers to an empty object ({}), representing module.exports.
// At the global level, this does not refer to the global object (global), unlike browsers.

// this in Browsers:
// Refers to the window object in the global context.
// Represents the global scope and is accessible to scripts and DOM.

// Why the difference?
// Node.js isolates code for modularity and security.
// Browsers share a global environment to simplify interaction with the DOM and APIs.


// 'this' uses in a function ?

function chai(){
    console.log(this);
}

chai(); // printed the global parameters 

// if using the strict mode it will be indefine

"use strict";
function make(){ 
    console.log(this);
}

make(); // undefine