// object literal this keyword and current, global exectution context

const user = {
    username : "Ravi Gupta",
    loginCount : 8,

    getUserDetails : function (){
        // console.log("here is the user details");
        console.log(this.username);
        
        // console.log(this) // it return the currecnt context
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // It return the empty object {}, in global context


// Constructor Function

// new keyword - 
 // new keyword create new instance for the object.
// const promiseOne = new Promise()
// const date = new Date()

function User(username,loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this // implicitely define alreay not necessary to return
}

const userOne = new User("ravi Gupta",12,true)
const userTwo =  new User("Hitesh Chowdhari",18,false)


// console.log(userOne) // Values Overrights
// console.log(userTwo) // new keywords create its new instance , then value can't overrights

console.log(userOne.constructor);