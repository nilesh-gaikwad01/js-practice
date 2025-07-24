
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
    return myuser.username; // Return just the username for the next .then()

}).then (function (myname){
    console.log(myname);

}).catch(function (error){
    console.log(error)
}).finally(() => { console.log("The Promise is Either resolved or rejected")})


// Promise consumed by using asyns and await.
// some cases it will be used for the handling promises because there is no catch
// e.g when my database connection is not done then I will not go the next task

const promiseFive = new Promise (function (resolve,reject){

    setTimeout(function (){
        let error = true;
        if(!error){
            resolve({username:"Nilesh zz", surname: "gaikwad"})
        }else{
            reject("Js Went Wrong")
        }
    },1000)
})

async function consumePromiseFive (){
    try {
        const response = await promiseFive ;
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive() // Function call

// await is used to wait for a Promise to finish. 
// await only works inside async functions
// async functions always return Promises
// Always use try-catch for error handling

async function getAllUsers (){
  try {
    const response =  await fetch('https://api.github.com/users/nilesh-gaikwad01');
    // console.log(response) // see the console this data will take time to the convert actual data thats why below await response is used

    const data = await response.json(); // await for a time and get data
    console.log(data);
  } catch (error) {
    console.log("E :",error)
  }
  
}

getAllUsers()

// use fetch API

const url = 'https://api.github.com/users/nilesh-gaikwad01'
fetch(url).then((response) => { 
    console.log('step 1 : It return response object')
    return response.json(); // convert the object into json

})
.then((data) => {
    console.log(data); // getting actual data
    console.log("Login Details :", data.login );
    console.log("FOllowers :",data.followers);
    console.log("Following  :", data.following);
    console.log("Username :", data.name)
})
.catch((error) => { 
    console.log(error)
})
.finally(() => { console.log(" Finally : End Here") })


