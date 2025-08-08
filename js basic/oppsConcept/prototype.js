//

let myName = "nilesh"

// console.log(myName.length);

const heroes = ["thor","Ironman", "captain America"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function (){
        console.log(`Spidy Power is ${this.spiderman}`);
        
    }
    
}
 Object.prototype.hitesh = function (){
     console.log(`Hitesh is present in all object`)
 }
   
 Array.prototype.nilesh = function (){
    console.log(`Nilesh Present here`)
 }

// heroPower.hitesh();
heroes.hitesh() // array accesses the defined property

// heroPower.nilesh() // TypeError: heroPower.nilesh is not a function

heroes.nilesh();
