// Promise 1
/*
const promiseOne = new Promise(function (resolve,reject) {
    // Do an async task
    // DB Calls, cryptography, network

    setTimeout(() => {
        console.log('Async task 1 is complete');
        resolve()
    }, 3000);
});
promiseOne.then(function () {
    console.log("Promise 1 consumed  then");
})

new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("Async task 2 "); 
        resolve()  
    }, 3000)
}).then(function () {
    console.log("Async task 2 then");
})


const promiseThree= new Promise(function (resolve,reject) {
    setTimeout(() => {
        console.log("promise for username and email");
        resolve({username:'kamran',email:'malik@g.com'})
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})


const promise4= new Promise(function (resolve,reject) {
    setTimeout(function()  {
        let error=true
        if (!error) {
            resolve({username:"abc",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    }, 4000);
})

promise4
.then(function (user) {
    console.log(user);
    return user.username
})
.then(function (username) {
    console.log(username);
}).catch((err)=>{
    console.log(err);
})



const promise5 = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error=false;
        if (!error) {
            resolve({username:'kamran',pass:'123'})
        }else{
            reject('Error: Some Wrong')
        }
    }, 2000);
});

promise5.then((user)=>{
        console.log(user);
        return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error=true
        if(!error){
            resolve({username:'sanam',password:'123'})
        }else{
            reject('Error:Sorry Wrong')
        }
    }, 1000);
});

async function consumePromiseFive() {
   try {
        const response= await promiseFive
        console.log(response);
   } catch (error) {
       console.log(error);
   }
}

consumePromiseFive()



async function getAllUsers() {
    try {
        const response= await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await response.json()
        console.log(data);
    } catch (error) {
        console.log('Error:',error);
    }
}

getAllUsers()

*/


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
        return response.json()
})
.then((data)=>{
    console.log(data);
    console.log(data.address);
})
.catch((err)=>{console.log('Error',err);})
.finally(()=>{console.log("The promise is either resolved or rejected")})
