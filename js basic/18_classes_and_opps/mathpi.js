
//If the value of math.PI is constant 3.14 can we change it overwrite the pi value with new one. 
// console ruturn the object like what is the value , is it writable enumerable and confurable

const Discriptor = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(Discriptor)
console.log(Math.PI) // 3.141592653589793

// Create new object 

// const one =  Object.create(null); 
 
//  one.product = "Chai only",
//  one.price = 250

// console.log(one); [Object: null prototype] { product: 'code only', price: 250 }

const employeDetail = {
    first : "Developer",
    role :"SDE",
    mode: "remote",
    lPA : function(){
        console.log(`${this.mode} lpa is 15`);
        
    }
}
employeDetail.lPA();// Function call

// console.log(employeDetail);

employeDetail.first = "DevopsTeam"
// console.log(employeDetail);


// console.log(Object.getOwnPropertyDescriptor(employeDetail, "first"));

Object.defineProperty(employeDetail, "first", {
    // writable: false
    enumerable: true
    
})

// console.log(Object.getOwnPropertyDescriptor(employeDetail, "first"));

// Now we can not change it writble

employeDetail.first = "never changed"

console.log(employeDetail)

// Loop is used when the given is method means using function inside it

// handle methods 

// for (let [key,value] of Object.entries(employeDetail)) {
//     if (typeof value !== "function") {
//         console.log(`print the key : ${key} and value : ${value}`);        
        
//     }
    
// }






