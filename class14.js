//Creating a Promise Syntax
// const promise = new Promise(function(resolve,reject){ //function --> Executor function
//  //some async work will go here
// })

// Creating a Promise

//  let washDishes = new Promise(function(resolve,reject){ //washDishes holds the promise object
//   let isClean = true;
//   if(isClean){
//     //success
//     resolve("Dishes are clean")
//   }
//   else{
//     //error
//     reject("Could not clean the Dishes");
//   }
//  })
//  console.log(washDishes)
// //Consuming a Promise
// washDishes
// .then(function(message){
//   console.log("Success:" , message);
// })
// .catch(function(error){
//   console.log("Failure:" , error);
// })

//Async Operation
// let chaiPromise = new Promise(function(resolve,reject){
// console.log("Order placed.Waiting for chai");//sync piece of code

// //async operation
// setTimeout(function(){
//   let isShopOpen = Math.random() > 0.5;
//   if(isShopOpen){
//     resolve("Chai is ready");
//   }
//   else{
//     reject("Shop not open-no chai");
//   }
// },2000)

// })
// console.log("You continue coding while the chai is being made");

// chaiPromise
// .then(function(message){
//   console.log("Success : ",message);
// })
// .catch(function(error){
//   console.log("Failure:",error);
// })
// .finally(function(){
//   console.log("done waiting- back to work!");
// })
// console.log("last line");

//Reading Files
// const fs = require("fs");
//   let f1read = fs.promises.readFile('sync1.txt','utf-8')
//   let f2read = fs.promises.readFile('sync2.txt','utf-8')
//   let f3read = fs.promises.readFile('sync3.txt','utf-8')
//   f1read
//   .then(function(resolve){
//     console.log("F1 data "+resolve);
//   })
//   .catch(function(reject){
//     console.log("F1 error "+reject);
//   })
//   f2read
//    .then(function(resolve){
//     console.log("F2 data "+resolve);
//   })
//   .catch(function(reject){
//     console.log("F2 error "+reject);
//   })
//   f3read
//    .then(function(resolve){
//     console.log("F3 data "+resolve);
//   })
//   .catch(function(reject){
//     console.log("F3 error "+reject);
//   })
//Serial File Reads
// const fs = require('fs');
// let f1read = fs.promises.readFile('sync1.txt','utf-8')
// let f2read = fs.promises.readFile('sync2.txt','utf-8')
// let f3read = fs.promises.readFile('sync3.txt','utf-8')
// f1read
// .then(function(data){
//   console.log("F1 read "+data);
//   return f2read;
// })
// .then(function(data){
//   console.log("F2 read "+data);
//   return f3read;
// })
// .then(function(data){
//   console.log("F3 read "+ data);
// })
// .catch(function(error){
//   console.error(error);
// })
// .finally(function(){
//   console.log("file read complete");
// })
//Code Cleanup
// function handleData(data){
//   console.log(data);
// }
// function handleError(error){
//   console.error(error);
// }
// const fs = require('fs');
// let f1read = fs.promises.readFile('sync1.txt','utf-8')
// let f2read = fs.promises.readFile('sync2.txt','utf-8')
// let f3read = fs.promises.readFile('sync3.txt','utf-8')
// f1read
// .then(handleData)
// .catch(handleError)
// f2read
// .then(handleData)
// .catch(handleError)
// f3read
// .then(handleData)
// .catch(handleError)

//Serial Async operations
 function makeChai(){
  return new Promise(function(resolve,reject){
   console.log("Starting to make chai");//sync piece of code

   //async operation
  setTimeout(function(){
  let isShopOpen = Math.random() > 0.3; //70 percent chance of being successful
  if(isShopOpen){
    resolve("Chai is ready");
  }
  else{
    reject("Gas ran out-can't make chai");
  }
  },2000)

}) 

}
makeChai() //returns a promise
.then(function(msg){
 console.log(msg);
 return toastBread() // Returns a new Promise
 })
 .then(function(message){
  console.log(message);
  console.log("Breakfast served - chai and toast");
 })
.catch(function(err){
 console.log(err);
 })
 .finally(function(){
  console.log("Chai attempt done");
 })

function toastBread(){
  return new Promise(function(resolve,reject){
    console.log("Toasting Bread");//sync piece of code
   //async operation
  setTimeout(function(){
  let isBreadAvailable = Math.random() > 0.2; //80 percent chance of being successful
  if(isBreadAvailable ){
    resolve("Bread Toasted");  
  }
  else{
    reject("No Bread left");
  }
  },1500)
  })
}


