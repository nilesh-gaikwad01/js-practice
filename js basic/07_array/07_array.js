// Array in Javascript

//Array is collection of multiple objects stored in a single variable

//JavaScript arrays can store elements of different types, such as numbers, strings, and objects.

//Elements in an array are accessed using their index, starting from 0. For example, array[0] accesses the first element.

//JavaScript arrays come with numerous built-in methods for operations like adding, removing, and manipulating elements (e.g., push(), pop(), slice(), map(), filter()) 

//Arrays can be easily iterated over using loops such as for, forEach, and for...of


// Creating array

const firstArray = [1,2,3,4,5,6];

// console.log(firstArray);
// console.log(typeof(firstArray)); // Output:object

//Methods Of Array

1. // Push()

// It uses insert the element into the given array

let = myArray = ["nitin","nikhil","nilesh",1,2,3]

// console.log(myArray);
// console.log(myArray.length);

// console.log(myArray.push("name"));
// console.log(myArray);

2.// pop()

//Removes the last element from an array and returns that element

let  myArray1 = ["nitin","nikhil","nilesh",1,"name"]
var result1 = myArray1.pop(1);

// console.log(result1);
// console.log(myArray1);
// console.log(myArray1.pop("name"));

3.//shift()

//Removes the first element from an array and returns that element.
let myArray2 =["apple","banana","mango"]
const result2 =myArray2.shift();

console.log(result2)

4.// unshift()

// Adds one or more elements to the beginning of an array and returns the new length.

let myArray3 =["apple", "banana", "orange"]
const result3 =myArray3.unshift("nilesh");

console.log(result3);
console.log(myArray3);

5.//concat()

// Merges two or more arrays and returns a new array.

let myArray4 = [1,2,3,4,5,6,7]
let myArray5 = [8,8,8,9,9]

let result4 = myArray4.concat(myArray5)

// console.log(myArray4.concat(myArray5));
console.log(result4);
console.log(result4.length);

let 
// console.log(myArray1.concat(myArray2));
// console.log(myArray4.concat(myArray3));

6 // slice()

// Returns a shallow copy of a portion of an array into a new array object.

let fruits = ["apple", "banana", "orange", "grape"];
let citrus = fruits.slice(1, 3); // ["banana", "orange"]

let newarray =[1,2,3,4,5]
console.log(newarray.slice(0,4));

console.log(citrus);


7. // splice()

// Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

let myfruits = ["apple","banana","mango"]
let resultFruits = myfruits.splice(1,1, "carrot");

console.log(resultFruits);
console.log(myfruits);


8.// indexof()

//Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// let arraylist = [3,4,5,6,7,8,9]
// let arraynew = arraylist.indexof("1");

// console.log(arraynew);

let fruits1 = ["apple", "banana", "orange"];
let index = fruits1.indexOf("banana"); 

console.log(index);

9. // forEach()

// Executes a provided function once for each array element.

let fruits2 = ["kiwi","apple","banana"]

let resultfruits1 = fruits2.forEach(fruit => console.log(fruit)); // Logs each fruit

10. //map()

//Creates a new array populated with the results of calling a provided function on every element in the calling array.

let var1 = [1,2,3]

console.log(var1.map(Num => Num *2))

11.//filter()

// Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4];
let even = numbers.filter(num => num % 2 === 0); // [2, 4]

console.log("filter function :",even);



12.// reduces()   

// executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

let numbers2 = [1, 2, 3, 4];
let sum = numbers2.reduce((total, num) => total + num, 0); // 10

console.log(sum);


13.// find()

// Returns the value of the first element in the array that satisfies the provided testing function.

let numbers3 = [1, 2, 3, 4];
let found = numbers3.find(num => num > 2); // 3

console.log(found);


14.// findIndex()

//Returns the index of the first element in the array that satisfies the provided testing function.

let numbers4 = [1, 2, 3, 4];
let index1 = numbers4.findIndex(num => num > 2); // 2

console.log(index1);

15. // sort()

//Sorts the elements of an array in place and returns the sorted array.
let array8 = [9,2,4,6,7,6]
console.log(array8.sort());

16.//reverse()

//reverses the order of the elements in an array in place.

let newarray1 = ["zebra","banana","apple","mango"]
console.log(newarray1.reverse());
console.log(newarray1.sort());

17.// incluides ()

//Determines whether an array includes a certain value among its entries, returning true or false.

let newarray2 = [1,2,3,4,5,5]

console.log(newarray2.includes(2));//True
console.log(newarray1.includes("banana"));//True
console.log(newarray.includes("zebra"));//False

18. // join()

//Joins all elements of an array into a string and returns this string.

let newarray3 = ["zebra","banana","apple","mango"]

console.log(newarray3.join(","));

19.//at()

//Takes an integer value and returns the item at that index, allowing for positive and negative integers.

let fruit = ["apple", "banana", "orange"];
let first = fruit.at(0); // "apple"
let last = fruits.at(-1); // "orange"

console.log(last);
console.log(first);


20. // Spread Operator in Javscript




// Find Duplicate Elements in Array

function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();

  for(let num of arr) {
    if(seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }
  return [...duplicates];
}
console.log(findDuplicates([1, 2, 3, 2, 4, 1]));


// Sum of all element in array

function arraSum(arr){
    return arr.reduce((acc, val ) => acc+val, 0);

}
console.log(arraSum ([10,20,30])) 


// Remove duplicates from array

function removeDuplicate (arr) {
    return [...new set(arr)]

}
console.log(removeDuplicate([1,1,2,2,2,3])) // 1,2,3

// Check for Prime Number

function isPrime(n) {
  if(n <= 1) return false;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // console gives true





