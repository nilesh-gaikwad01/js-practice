// Function in Javascript

// Reusable block of code


 function newfunction(){
    console.log("FIRST FUNCTION");
}

newfunction()

let store = function onefunction(){
console.log("Hello, Developers")
return
}

// onefunction() // is not accessible outside the function definition. Since store holds the reference to the function, you should call store()

store()

let store1 = function(){
    console.log("Hello, MERN Developers")
}

store1()

// Parameters and arguments of function


function FirstFun(name,sirname){
    console.log("This is First Function ")
    console.log(name+sirname)
    return name+ sirname 
}

FirstFun("John","doe") // Function call and argumrnts means values passing to the function

function SecondFun(number1,number2){

    console.log("THis is second function ");
    let result = number1 + number2 // value Store in the variable
    console.log(result);
    // return result
}

SecondFun() // function call output NAN
SecondFun(20,30) //  Passing Arguments
console.log(SecondFun(20,30)) // we can print directely to the console
console.log(SecondFun(20,30)) // Without Return statement print undefined 

let result = SecondFun(20,30); //result store and print 

console.log(result) 


// use of if statement to check the value.

// function logginuser(username){
//     return `${username} just logged in`
// }

// logginuser("Hitesh") // function call 
// console.log(logginuser("hitesh")) // console output :hitesh just logged in


function logginuser(username){ 
    if(username === undefined){
        console.log("plz enter a username")
        return // for break the block.
    }
    return `${username} just logged in`
}

console.log(logginuser()) // arguments not passed then  print undefine


// Rest operator (...) >>  add a multiple values in Function

function CalculateCartPrice(...numb){  // Rest oprator
    return numb
}

let addPrice = CalculateCartPrice(100, 200, 300, 500)
console.log("Cart Price ", addPrice); //  It Return array of object // Cart Price  [ 100, 200, 300, 500 ]


function SecondPrice(val,val2,...numb){
 return numb

}

console.log(SecondPrice(9,10,11,20));


// Use of Objects In Function

let user = { 
    username : "Nilesh Gaikwad",
    age : 24,
}

function HandleObj(anyobject){ 
   return `My name is ${anyobject.username} my age is ${anyobject.age}`

}

// HandleObj(user)
// console.log(HandleObj(user))

console.log(HandleObj({ // pass directely object Instead of making Object
    username: "Hitesh bhaii",
    age: 35,
}))

 // Use of Array in Function 

 let MyNewarray = [110,111,222,333]

 function HandelArray(annyarray){
    return annyarray[1]  // It return a Second value of array
 }

 ArrayResult = HandelArray(MyNewarray)
 console.log(ArrayResult);


 // Question - How to return a second value of array.

 let Onearray = [100,500,700,900];

//  function ArrayValue(getarray){
//     console.log(getarray[1]);
//     return
//  }

 function ArrayValue(getarray){
    return getarray[1]
 }

 console.log(ArrayValue(Onearray))


// Questions for Practice



