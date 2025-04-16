// High Order Array Loop


// ["","",""],
// [{},{},{}]

// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "hello, world"

for (const greet of greetings) {
    // console.log(`Each Char is $(greetings)`);
    
    
}


// Maps in Javascript

// Maps is Unique Key Value Pair in the Javascript
// special type of object that stores key-value pairs
// just like an object ({}), but with some extra features that make it more powerful.

const map = new Map()

map.set("ind", "India"),
map.set("uk", "United kingdom")
map.set("usa", "America")
map.set("SA","South Afrika")

console.log(map)

// Loop on Map

for (const key of map) {
    // console.log(key)
}

for (const [key, Value] of map) { // array destrcturing
    // console.log(key ,':-',Value)
    
}

// Note : Can not use for of loop on Object,for in loop is used for the iteration

const myObject ={
    name : "Your name is ",
    age : "your age is",
    luckyno: 29
}

for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(`this is key ${key}, this is value ${myObject[key]}`)
    
}

// For Each loop 


const coding = ["Js","Ruby","CPP","Python"]

//Normal Function

// coding.forEach(function (item){
//     console.log(item)
// })

// // Arrow Function

// coding.forEach((item) => {
//     console.log(item)
// });

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

// Note : forEach loop print the parameters like items, index and total array

function printMe(item, index,array){
    console.log(item,index,array)
}

coding.forEach(printMe)



// Array 

const myCoding =[
    {
        languageName : "javascript",
        fileName: "js"
    },
    {
        languageName : "java",
        fileName: "java"
    },
    {
        languageName : "python",
        fileName: "py"
    }
]

// console.log(myCoding)

myCoding.forEach((item) => {

    console.log(item.languageName);
    // console.log(item.fileName);
});