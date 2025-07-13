// var text =  "Nilesh"
// console.log(text);
// var next = "Hello,world"
// console.log(next);



// // Operator in js

// let op1 = 10;
// let op2 = 20;

// const result = op1 + op2;

// console.log(result)

// let op3 = 20;
// let op4 = 100;

// // console.log(op3%op4)

// const nilesh = 111;
// let name = 100;

// console.log(nilesh%name);


//Bitwise operator
// let a = 10;
// a>>= 1;
// console.log(a);

// let b = 10;
// a^=2;
// console.log(b);

// let c = 10;
// b|=3;

// let d = 20;
// d&= 1;
// console.log(d);






// String In javascript

//How to find  legth of the given string

const str1 = "Things are Beautifull";

var result1= str1.length

// console.log(str1.length);

// console.log(result1)


// How to find a charector of specific index


let str2 = "This is the right place to design            your     hobby           ";

var resultcharAt = str2.charAt(0)

// console.log(resultcharAt);
// console.log(str2.length)
// console.log(str2.charAt(1))
// console.log(str2.charAt(2))
// console.log(str2.charAt(100)) // It gives a  empty string for out of boundary element

// console.log(str2)
// console.log(str2.at(1))
// console.log(str2.at(2))
// console.log(str2.at(-1))
// console.log(str2.at(-10))
// console.log(str2.at(100))



// How to access the code of the specified index

let str3 = "Okay I am a not Aware about the things";

// console.log("str3 :",str3)

// const charresult = str3.charCodeAt(0) 
// console.log(str3.charCodeAt(1))
// console.log(str3.charCodeAt(2))
// console.log(str3.charCodeAt(-3))
// console.log(str3.charCodeAt(100))


// How to access the  string charector using this bracket[ ]

let str4 = "my name is Nilesh and i'am a MERN stack Developer ";

console.log("string4:",str4)

let string_access = str4[0];
let stringresul = str4[1];


// console.log(string_access)
// console.log(stringresul)
// console.log(str4[2])
// console.log(str4[3])
// console.log(str4[-2])

// How to Uppercase and Lowecase and Uppercase in the given string

const str5 = " THIS IS STRING FIVE , WANT TO CHECK THE LOWERCASE CHAR- ";

const str6 = " This is the string six want TO check the uppercase char";

// console.log("string 5:",str5)
// console.log(str5.toLowerCase())
// console.log("string 6:",str6)
// console.log(str6.toUpperCase())

// How to Remove the whitespaces from both end of the string

//trim(),trimStart(),trimEnd()

var str7 = "    This is string Seven want to check the whitespaces            "; // remove White spaces from bothe of the end string

const str7result = str7.trim();
const str7new1 = str7.trimStart();
const str7new2 = str7.trimEnd();

// console.log(str7)
// console.log(str7.length)
// console.log(str7result)
// console.log(str7result.length)
// console.log(str7new2)
// console.log(str7new1)

// console.log(str7new1.length)
// console.log(str7new2.length)
// console.log(str7result.length)
// console.log(str7.length)


// how to pad the string 

// padStart() padEnd()

// padding means to add  the extra charector in string

// let padone = "new book ";
// let paddedstart1 =padone.padStart("20", "Niluu");
// let paddedstart = padone.padEnd("20","Nilesh");

// console.log(paddedstart1)
// console.log(paddedstart)

// how to repeat the string

let checkstr = "have you good knw";

const resultedstring = checkstr.repeat(5);

// console.log(resultedstring)
// console.log(checkstr.length)// 17
// console.log(resultedstring.length) // 17*5 = 85


// how to split the string


var nilesh = "hello,name,middle name, sir name, village"

const save = nilesh.split(",");
const saveres =nilesh.split("");

// console.log(save)
// console.log(saveres)


// How to replace the string 

let count = "ten,nine,eight,seven";

// console.log(count.replace("t","become a developer"))
// console.log(count.replace("nine","become a developer"))
// console.log(count.replace("eight","become a developer"))
// console.log(count.replaceAll("ten,nine,eight,seven","MERN Stack Developer"))


// The Differace between Slice(),SubString(), SubStr()



// Array in Javascript 

// How to perform push(),pop(),shift(),unshift() the element into given array

const myarray = ["nilesh","name",1,2,4,"vaibhav"];

let result = myarray.push("gaikwad");

// console.log(myarray)
// console.log(result)
// console.log(result.length)


const myarray1 = [122,111,333,"nileshgaikwad","MERN" ,"stack developer"];

const  result2 = myarray1.pop("MERN");

// console.log(result2)
// console.log(myarray1)

const myarray3 = [122,111,333,"nileshgaikwad","MERN" ,"stack developer"];

console.log(myarray3.shift())





// Destructring of an object and what is jason



let  myobject = {
    name: "Nilesh gaikwad",
    age : 25,
    value : false,
    position : " as a MERN Stack Developer",
    other : "Consistency is a kay",
}

const {name,age,value,position,other} = myobject // Destructring

// console.log("check destructring : ",myobject)
// console.log(name);
// console.log(age);
// console.log(value);
// console.log(position);
// console.log(other);


const yourobj = {}

yourobj.name = "Rahul Kumaar",
yourobj.age  = 29,
yourobj.location = "pune"
yourobj.time = true,

console.log("check destructring : ",yourobj)

var {location,time} = yourobj

// console.log(location);
// console.log(time);

const oneres  = yourobj.name = "KK"

console.log(oneres);

let nametwo = Object ()



nametwo.name = "SUDHIR YADAV MM",
nametwo.age  = 57,
nametwo.adress = "TCS",
nametwo.loggedtime = false

let {adress,loggedtime } = nametwo 

// console.log(adress,loggedtime);
// console.log(loggedtime);








