//string Operations

let str1 = "Nilesh"  //string addition
let str2 = "gaikwad"
let str3 = '123'

console.log(str1+str2+str3) //Outdated syntax
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); //Outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //Modern syntax backticks its very Imp

const gamename = new String("nilesh-fc") //By using js string object

console.log(gamename)
console.log(gamename[0]) //access the index value
console.log(gamename.__proto__); // console use 

console.log(gamename.length) //It gives string Length
console.log(gamename.toUpperCase()) //Upercase char
console.log(gamename.indexOf('h')) //Position of char
console.log(gamename.toLowerCase()) // Lowercase char

const newString = gamename.substring(0,4) //string devide in substring 

console.log(newString)

let anotherString = gamename.slice(0,5) //String slicing done
console.log(anotherString)
console.log(gamename.slice(2,4))
console.log(gamename.slice(-3,4))
console.log(gamename.slice(-2,3))
console.log(gamename.slice(-1,5))

const newOneString = "             HiteshBhaii " // string Trimming - to Cut the Extra spaces between string
console.log(newOneString)
console.log(newOneString.trim())

let url = "https://nileshgaikwad.com/nilesh20Gaikwad" //Replace the string

console.log( url.replace('20','-')); 

console.log(url.includes('sundar')); //

console.log(gamename.split('-')); //split the string

//practice : Methods of string

 1 //String length 

// The length property returns the length of a string


let text = "Nilesh Gaikwad ";
let length = text.length

console.log(text)
console.log(length);
console.log(text.length);

 2 // String charAT()

//The charAt methods returns charector at the specified index

console.log(text.charAt(2));
console.log(text.charAt(0));
console.log(text.charAt(1));

 3 //String charCodeAt()

// The charCodeAt() method returns the code of the character at a specified index in a string
//It returns the unique code value of the specified index 

console.log(text.charCodeAt(0));
console.log(text.charCodeAt(1));
console.log(text.charCodeAt(2));

4 // String at()

// This Methods returns the charector of the specific index

console.log(text.at(0));
console.log(text.at(1));

5 //String []

//This method can access the string charector using [] bracket

let str4 ="Things are beautifull";

console.log(str4[0]);
console.log(str4[1]);
str4.slice(0,2);

6 //String Slice()

//slice() extracts a part of a string and returns the extracted part in a new string.

console.log(str4.slice(0,6));// Output: "Things"  (slices from index 0 to 6)
console.log(str4.slice(6,9));//Output: " ar"     (slices from index 6 to 9)
console.log(str4.slice(-12));//If a parameter is negative,the position is counted from the end of the string
console.log(str4.slice(-6,-9))// (Invalid range, it returns an empty string)

0.7 //String substring()

//The substring() method is similar to slice(). It also returns a part of the string, but it does not accept negative indices.
//The difference is that start and end values less than 0 are treated as 0 in substring()

let nayan = "banana, apple ,kiwi";

console.log(nayan.substring(-2,4));//-ve value treated as 0 
console.log(nayan.substring(-1,5));//banan
console.log(nayan.substring(0,5))//banan

0.8 //String substr()

//The substr() method returns a part of the string, starting at the specified position and lasting for a given number of characters. 
//It takes two parameters: the start index and the length of the extracted part.

let str5 = "Nilesh,aayush,prashant"

let result = str5.substr(5,7); // ",aayush"  (starts at index 5 and takes 7 characters)

console.log(result);
console.log(str5.substr(1,5));// "ilesh"    (starts at index 1, takes 5 characters)
console.log(str5.substr(-6)); // "shant"    (last 6 characters)

// The Differance between slice,Substring,substr
// Negative Indices:

// slice() supports negative indices, counting from the end of the string.
// substring() does not support negative indices.
// substr() supports negative indices for the start position.

// Parameters:

// slice(start, end): Start and end indices.
// substring(start, end): Start and end indices, but no negative values.
// substr(start, length): Start index and length of the substring.

// Purpose:

// Use slice() when you need a part of the string with flexibility in indices.
// Use substring() when working with positive indices and ensuring compatibility with older code.
// Use substr() when you need a substring of a specific length starting from a given position.



8 // String toUpperCase()

//Converts all characters to uppercase.

let str6 = "hello, world!"

let save = str6.toUpperCase();
console.log(save);

9 // String to LowerCase

// Convert all the charecters to lowercase

let = str7 = "HELLOW, WORLD!"

let saveresult = str7.toLowerCase();
console.log(saveresult);

10. // String Concat

//It uses for Joint two string

let = per1 = "Right";
let = per2 = "person";

console.log(per1.concat(" ", per2));//Right person
console.log(per2.concat(" ", per1));//person Right

11. //String trim()

// Removes whitespace from both ends of the string.

let newstring = " hello,namu        "

console.log(newstring.trim());

 12. //String trimStart()

//Removes whitespace from the start of the string.

let new1 = "   hello,namu   "

console.log(new1.trimStart())

12. //String trimEnd()

// Removes whitespace from the end of the string.

let new2 = "   hello,sir          "

console.log(new2.trimEnd());

13. // String padStart()

//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.
//In JavaScript, you can pad (add extra characters) to the start or end of a string using two methods:


   
  let newname = "Hello";  
  let paddedStri = newname.padStart(10, "x");  // Output: "xxxxxHello"  

  console.log(newname)
  console.log(paddedStri)
  
  // Useful when you want a string to have a specific length by adding characters at the start 
  
  // padEnd() 
  
  // Ideal for ensuring a string reaches a certain length by adding characters at the end 
  

  let newname1 = "Hello";  
  let paddedStr = newname1.padEnd(10, "-");  // Output: "Hello-----"

  console.log(newname1)
  console.log(paddedStr)

// let declare = 5;
// const tex = declare.toString();
// let padded = text.padStart(4,"0");

// console.log(declare);

// console.log(padded);
// console.log(text.padStart(4,"1"))

// 14.// String padEnd()

// let savepad = "5";
// console.log(savepad.padEnd(3, "0")); // '500'

15. // String repeat()

//It uses repeate the string

let givenstr = "abc";
console.log(givenstr.repeat(3)); // 'abcabcabc'

15. // String replace()

let str11 = "Hello World";
console.log(str11.replace("World", "Everyone")); // 'Hello Everyone'

16. // String replaceAll()

let str15 = "Hello World World";
console.log(str15.replaceAll("World", "Everyone")); // 'Hello Everyone Everyone'

17. // String split()

//splits the string into an array of substrings using ',' as the separator.

let str17= "Hello,World,Again";
console.log(str17.split(",")); // ['Hello', 'World', 'Again']


let numb = 5;
let text1 = numb.toString();
// document.getElementById("demo").innerHTML = text1.padEnd(4,"x");
console.log(text1.padEnd(4,"x"));

