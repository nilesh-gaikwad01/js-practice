// Practice 


// for loop 

// A for loop is used when you know how many times you want to repeate the code
// when no of iteration known
// When looping through arrays, lists, or tables.
// When performing count-based operations.

// syntaxx :

// for (initialization, condition, Update){
          // code execution
// }


for(i=1;i<=5;i++){
    console.log("iteration :", i)
}



// Looping Throgh an array

let fruits = ["apple",  "Banana", "Mango"]

// for (i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
for (i=0; i<=fruits.length; i++){
    console.log(fruits[i]);
} // print undefine out of boundary indexes

//if condition

for (i = 0 ; i<=5 ; i++){
    console.log(i)
    if(i==5){
        console.log("i is equal to 5")
    }
}
console.log("5 is best no")

// Nested Loops

for (i=0; i<=3 ; i++){
    console.log(`Outer loop ${i}`);

    for(j=0; j<=4 ; j++){
        console.log(`inner loop ${j}`)
    }
}
console.log(`Execution Stop`)


// while Loop 



// let index = 0;

// while (index<=10) {
//     console.log(`value is 2 ${index}`)
//      index = index+2;
    
// }

// Use of array in While loop

let myArray = ["jan", "Feb","March","Apr"];

arr = 0;

while(arr<=myArray.length){
    console.log(`The Value is ${myArray[arr]}`);
    arr = arr + 1;
    
}

// Do While loop 



let test = 1;

do {
    // console.log(` this is ${test}`);
    test++
    
} while (test<=10);

// do while loop execute code first then condition will be check

let Number = 11 ; 

do {
    console.log(`This is value is ${Number}`)
}while(Number<=10) // Output 11 after the condition check loop stop



