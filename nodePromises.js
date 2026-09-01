const { log } = require('console')
const fs = require('fs')

// let filePromise = fs.promises.readFile('sync1.txt','utf8')
// filePromise
// .then(function(data){
//     console.log("this is the file data -->",data)
// })
// .catch(function(err){
//     console.error(err)
// })

//Multiple File reads
// let filePromise1 = fs.promises.readFile('sync1.txt','utf8')
// let filePromise2 = fs.promises.readFile('sync2.txt','utf8')
// let filePromise3 = fs.promises.readFile('sync3.txt','utf8')


// filePromise1.then(function(data){
// console.log("file-1 data -->",data)
// }).catch(function(err){
//     console.error(err)
// })
// filePromise2.then(function(data){
//     console.log("file-2 data -->",data)
// }).catch(function(err){
//     console.error(err)
// })
// filePromise3.then(function(data){
//     console.log("file-3 data -->",data)
// }).catch(function(err){
//     console.error(err)
// })

//Cleaner way of writing code
// let filePromise1 = fs.promises.readFile('sync1.txt','utf8')
// let filePromise2 = fs.promises.readFile('sync2.txt','utf8')
// let filePromise3 = fs.promises.readFile('sync3.txt','utf8')

// function handleSuccess(data){
//     console.log("File Data",data)
// }
// function handleError(err){
//     console.log("Error",err)
// }

// filePromise1.then(handleSuccess).catch(handleError);
// filePromise2.then(handleSuccess).catch(handleError);
// filePromise3.then(handleSuccess).catch(handleError);

//Read multiple files serially
let filePromise1 = fs.promises.readFile('sync1.txt','utf8')
let filePromise2 = fs.promises.readFile('sync2.txt','utf8')
let filePromise3 = fs.promises.readFile('sync3.txt','utf8')

filePromise1
.then(function(data){
    console.log("file-1 data -->",data)
    return filePromise2
})
.then(function(data){
    console.log("file-2 data -->",data)
    return filePromise3
})
.then(function(data){
    console.log("file-3 data -->",data)
   
})
.catch(function(err){
    console.error(err)
})
//Micro Task Queue vs Callback Queue
//  function logA(){console.log("A")}
//  function logB(){console.log("B")}
//  function logC(){console.log("C")}
//  function logD(){console.log("D")}
//  function logE(){console.log("E")}
 
//  logA() //sync A
//  setTimeout(logB,0) //Macro or Callback queue
//  Promise.resolve().then(logC) //Micro queue
//  logD() //sync D 
//  Promise.resolve().then(logE) //.resolve() - static method 
 
