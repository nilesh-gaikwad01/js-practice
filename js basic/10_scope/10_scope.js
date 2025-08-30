//scope { }

// Global scope 

// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
  

// Block scope 


if (true){

let a = 15;
const b = 25;
var c = 35; 
console.log("Inner value :",a);

}

// console.log(a); // a is not defined
// console.log(b); // b is not defined
console.log(c); // 35 


// Nested Scope


function one(){

    const name = "Nilesh"
    let sirname = "LaxmiNivar"

    function two(){
    let  cityname = " pune"

    console.log(name);
    console.log(sirname);
    console.log(cityname);
    }
    // console.log(cityname); // error value Outside the scope
    two() // function call
}
// console.log(name); // Error outside the scope

one() // function call

if (true){
    const Yourname = "abc"
    if (Yourname === "abc"){
        const websitename = " website.com"
        console.log(Yourname+websitename)
    }
    // console.log(websitename) // Error due to Outside of the scope
}
// console.log(Yourname) // Error due to Outside of the scope





// ++++++++++++++++++ interesting ++++++++++++++++++

// concept of Hoisting in javascript

console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

