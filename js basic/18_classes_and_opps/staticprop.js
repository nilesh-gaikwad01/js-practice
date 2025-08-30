// Static Properties

class User {
    constructor(username){
        this.username
    }
    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static createId (){
        return `123`
    }
}

const hitesh = new User("Nilesh")

// console.log(hitesh.createId())

class Teacher extends User {
    constructor (username, email ){
        super(username);
        this.email= email
    }
}

const iphone = new Teacher ("iphone:", "i@iphone.com")
// console.log(iphone.createId());
