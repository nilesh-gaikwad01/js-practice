// ES6 

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword (){
        return `${this.password}#abc`
    }

    changerUsername (){
        return `${this.username.toUpperCase()}`
    }

}

// const chai = new User("chai","@gmail.com", "1234");

// console.log(chai.encryptPassword());
// console.log(chai.changerUsername()); // CHAI

// Making New Function

User.prototype.encryptPassword = function (){
    return `${this.password}xyz`
}

const tea = new User("Tea", "tea@123", "2222");

console.log(tea.encryptPassword());
console.log(tea.changerUsername());


 class newUser {
    constructor(username){
        this.username = username
    }
     logMe(){
    console.log(`USERNAME is ${this.username}`);    
  }
 }

 class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password

    }
     addCourse(){
    console.log(`A new course was addes by ${this.username}`);
    
 }
  
 }

 const chai = new Teacher ("CHAI AUR CODE", "123@gmail.com", "123")

 console.log(chai);
 chai.addCourse()

 console.log(chai === Teacher );
 console.log(chai instanceof Teacher);
//  console.log(chai ===  User );
 console.log(chai instanceof User);
 
                          