//Async operation with async function+Promise
// async function getNumber(){
//     return 10;
// }
// getNumber().then(d=>{
//     console.log(d);
// })
// console.log(result===true);

//Async operation with async function+await
// async function getNumber(){
//     return 10;
// }
// async function printNumber(){
// const result =  await getNumber();
// console.log(result)
// }
// printNumber();

//getNumber will return an existing Promise.
// async function getNumber(){
//     return Promise.resolve(20);
// }
// async function printNumber(){
// const result =  await getNumber();
// console.log(result)
// }
// printNumber();

// asynchronous operation
// function getNumber(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//         resolve(30);
//         },1000)
//     })
// }
// // getNumber().then(function(d){
// // console.log(d);
// // })
// async function PrintResult(){
// let result = await getNumber();
// console.log(result);
// }
// PrintResult();

//Checking if Async returns a nested Promise
// async function getNumber(){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(50)
//         },1000)
//     })
// }
// async function printResult(){
//     let result = await getNumber();
//     console.log(result);
// }
// printResult();

//Promise Chaining 
// function makeTea(){
//     return new Promise(function(resolve,reject){
//         let result = Math.random() > 0.3
//         if(result){
//             resolve("Tea is ready");
//         }
//         else{
//             reject("Ran out of milk");
//         }
//     })
// }
//  function makeToast(){
//     return new Promise(function(resolve,reject){
//         let result = Math.random() >0.7
//         if(result){
//             resolve("Toast is ready");
//         }
//         else{
//             reject("Ran out of Bread")
//         }
//     })
//  }

//  makeTea()
//  .then(function(data){
//     console.log(data)
//     return makeToast();
//  })
//  .then(msg=>{
//     console.log(msg)
//     console.log("Breakfast ready")
//  })
//  .catch(err=>{
//     console.log(err);
//  })

//The Coffee Shop Problem using promises
function placeOrder(drink) {
  return new Promise((resolve, reject) => {
    if (drink === 'coffee') {
      resolve('Order for coffee placed.');
    } else {
      reject('Sorry, we only serve coffee!');
    }
  });
}

async function serveOrder(data){
   try{
   const order = await placeOrder(data)
   console.log(order);
   } 
   catch(error){
   console.log(error);
   }
}
serveOrder('tea')
serveOrder('coffee')
