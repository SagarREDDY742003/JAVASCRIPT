//Promise is an object representing the eventual completion or failure of an asynchronous operation
// Libraries--> Q and BlueBird

const promisOne =  new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, Cryptography, network

    setTimeout(function(){
        console.log('task complete');
        resolve();
    },1000)
})

promisOne.then(function(){
    console.log("promise consumed");
})

//////////second way of promise writing/////////////////
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log('async2 resolved');
})

//////////////////////////////////////////////////////////////

const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"sagar", email:"sagar@gmail.com"});
    },1000)
})

promisThree.then(function(user){
    console.log(user);
})

////////////////////////////////////////////////////////////////////
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username:"sagar", password:"12345678"})
        }
        else{
            reject('ERROR: somethint Wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("Promise is either resolved or rejected");
})
/////////////////////////////////////////////////////////////////////////

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:"javascript", password:"12345"})
        }
        else{
            reject('ERROR: JS went Wrong');
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    } 
}
consumePromiseFive();

///////////////////////////////////////////////////////////////////////////

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log("E:",error);
    } 
}
getAllUsers();

/////// another way///

fetch('https://api.github.com/users/SagarREDDY742003')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {console.log(error);})