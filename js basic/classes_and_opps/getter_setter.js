
//getter and setter

class User {
    constructor( email, password){
     this.email = email
     this.password= password

    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
  
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password (value){
        this._password = value.toLowerCase()
    }
}

const hitesh = new User("nilesh@zz.com", "XYZ");

console.log(hitesh.password);
console.log(hitesh.email);
