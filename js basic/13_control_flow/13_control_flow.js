// control flow in javascript

// use a control statement inside it and control 

// Control flow in JavaScript is the way the code is executed, step by step. Normally, the code runs from top to bottom, one line after another. But with control flow, you can make decisions, repeat tasks, or jump to different parts of the code depending on conditions.


// If else condition statement and comparison operator

// <, >, <=, >=, ==, !=, ===, !==

// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// Scope in control flow

 const score = 200;

 if (score > 100){
    const save  = "Fly"
    // console.log(`Power , ${save}`);
 }
// console.log(`Power ${save}`)


const balance = 1200

if(balance <1000){
    console.log(`greater than`)
} else if(balance)
if(balance<500){
    console.log(`less than`)
}else if (balance < 750){
    console.log(`less than`)
}else if(balance==1100){
    console.log(`equal balance`)
}else{
    console.log(`else statement execution`)
}

// Multiple condition check


const userLoggedIn = true;
const debitCard = false;

// if(userLoggedIn && debitCard ){
//     console.log(`allow for logged in`); //and Condition checks both statements
    
// }

if(userLoggedIn && debitCard && 2==2 ){
    console.log(`allow to logged in`);
}

const userFrom = true;

if(userFrom ||  2==2 ){
    console.log(`allow for login user`);
}


// Swich cases

// The switch statement in JavaScript is a way to make decisions in your code, similar to an if-else statement, but it’s cleaner and easier to read when you have multiple options to check.


const month = 5

// syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

switch (month) {
    case 1:
        console.log(`jan`)
        break;
    case 2:
        console.log(`feb`)
        break;
    case 3:
        console.log(`Mar`)
        break;
    case 4:
        console.log(`Apr`)
        break;
    default:
        console.log(`Default case match`)
        break;
}

// Truthy and Falsethy Statement

// Truthy: A value that is considered "true" when evaluated in a boolean context.
// Falsy: A value that is considered "false" when evaluated in a boolean context.

// Truthy - True, all Non zero no,"hello","0",[] array,{}Object,function(){}

// falsy - false, 0, "", null, undefine,Nan,-0, BigInt 0n,

const value = ""

if(value){
    console.log(`truthy value`)
} else{
    console.log(`falsy value`)
}

const name = "hey" 

if(name){
    console.log(`truthy value`)
}
else{
    console.log(`falsy value`)
}

// Nullish Coalescing Operator (??) : null , Undefined

let val1 ;

val1 = 5 ?? 10 // It take First value 
// val1 = 10 ?? 16 
// val1 = null ?? 5 // Check and for the Safety take 15 value 

console.log(val1); // Output 5 10 5



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100 

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80")

iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")


