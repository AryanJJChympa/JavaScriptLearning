// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.


// const promise1 = new Promise(function(resolve,reject){
//     //Do an ASYNC task
//     //DB Calls, cryptography ,network
//     setTimeout(function(){
//         console.log('Async task complete');
//         resolve()
//     },1000)
// })

// promise1.then(function(){
//     console.log("Promise Consumed");
// })






// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })







// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: "Aryan", email:"chai@example.com"})
//     },1000)
// })

// promise3.then(function(user){
//     console.log(user);
// })






// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"Aryan", password:"123"})
//         }else{
//             reject('ERROR: Something went wrong')
//         }
//     },1000)
// })

// promise4.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch(function(error){
//     console.log(error)
// }).finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })







// const promise5=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"JavaScript", password:"123"})
//         }else{
//             reject('ERROR: JS went wrong')
//         }
//     },1000)
// })

// async function consumePromise5() {
//    try{
//     const response=await promise5
//     console.log(response);
//    }catch(error){
//     console.log(error);
    
//    }
// }
// consumePromise5()


// async function getAllUsers() {
//     try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data);   
//     }catch(error){
//         console.log("E: ",error);
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>
    console.log(error)
)
fetch(function(){
    console.log();
})