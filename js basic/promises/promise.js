
// promises in javascript

const promiseOne = new Promise(function (resolve, reject){
    // do any asyns task 
    // db calls //cryptography // network request

    setTimeout( function (){
        console.log('asyns is completed');
    },1000)
    resolve()
})

promiseOne.then(function (){
    console.log('promice consumed');

})

//Create and Use promise without Variable store

  new Promise( function (resolve,reject){

    setTimeout(function (){
        console.log('asyns task 2 is completed');
    },1000)
    resolve()

}).then(function(){
    console.log('Promice consumed 2');
})

// Use resolve in promise

const promiseThree = new Promise (function (resolve,reject){
    setTimeout(function(){
        console.log('asyns task 3')
    },1000)
    resolve( { username : "Nilesh zz",age : 25, Dob : 12-12-2000
    });
}).then(function (myname){
    console.log(myname);
})


// Use of reject in promise and chaining of then

const promiseFour = new Promise (function (resolve,reject){

    setTimeout(function(){
        let error = false;
        if (!error){
            resolve({username : "Nilesh zz", age : 25})
        }else {
            reject('GETTING ERROR : Something Wents Wrong ')
        }

    },1000)

})

promiseFour.then(function (myuser){
    console.log(myuser);
    return username;
}).then (function (myname){
    console.log(myname);

}).catch(function (error){
    console.log(error)
}).finally(() => { console.log("The Promise is Either resolved or rejected")})

const promiseFive = new (function (resolve,reject){

    setTimeout(function (){
        let error = true;
        if(!error){
            resolve({username:"Nilesh zz", sirname: "gaikwad"})
        }else{
            reject("Js Wents Wrong")
        }
    },1000)
})