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


// 