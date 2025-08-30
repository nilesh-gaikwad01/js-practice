// destruction of an object

const person = {
    name : "Nilesh",
    sirname : "Gaikwad",
    age :25,
    position:"Developer"
}

//How to Destructure this object , simply the destructring means the the objetct properties assign to the variable directely call  them in console instead of usng the object name.

let {name, sirname, position} = person 

// console.log(name);
// console.log(sirname);
// // console.log(age); nordestruct
// console.log(position);

person.name = "web-developer"
person.position = "development+Devops"

// console.log(name);
// console.log(position);

person.age =  "Pune, Mumbai, Bangaluru"
const {age:city} = person

// console.log(city)
 

//