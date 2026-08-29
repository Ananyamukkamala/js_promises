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
function handleData(data){
  console.log(data);
}
function handleError(error){
  console.error(error);
}
const fs = require('fs');
let f1read = fs.promises.readFile('sync1.txt','utf-8')
let f2read = fs.promises.readFile('sync2.txt','utf-8')
let f3read = fs.promises.readFile('sync3.txt','utf-8')
f1read
.then(handleData)
.catch(handleError)
f2read
.then(handleData)
.catch(handleError)
f3read
.then(handleData)
.catch(handleError)
