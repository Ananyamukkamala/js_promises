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
// function placeOrder(drink) {
//   return new Promise((resolve, reject) => {
//     if (drink === 'coffee') {
//       resolve('Order for coffee placed.');
//     } else {
//       reject('Sorry, we only serve coffee!');
//     }
//   });
// }

// async function serveOrder(data){
//    try{
//    const order = await placeOrder(data)
//    console.log(order);
//    } 
//    catch(error){
//    console.log(error);
//    }
// }
// serveOrder('tea')
// serveOrder('coffee')

// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("A"), 2000);
// });//P1 contains a promise

// async function test() {
//     console.log("1");   //1

//     const a = await p1;   //3

//     console.log(a);     //A

//     console.log("2"); //2
// }

// test();

// console.log("3");

//Example 1
// async function fetchData(){
//   return "data";
// }
// console.log(fetchData()); //logs Promise('data)

// fetchData().then(function(msg){
//   console.log(msg); //logs data
// })
// fetchData().then(msg=>console.log(msg))
//Example 2
// const p = new Promise(
//   resolve=>{
//     setTimeout(()=>resolve("Inner Promise Resolved"),2000)
//   })
// async function fetchData2(){
//   return p;
// }
// fetchData2().then(res=>console.log(res));
//Example 3
// async function handlePromise(){
//   console.log("before await");
//   const value = await p;
//   console.log(value);
//   console.log("After await")
  
// }
// handlePromise();
// console.log("Outer Async function")

//Example 4
// console.time("Start")
// const p1 = new Promise((resolve)=>{setTimeout(()=>{resolve("first done")},3000)})
// const p2 = new Promise(function(resolve){
//   setTimeout(function(){
//   resolve("Second Done");
//   },1000)
// })
// async function serialOps(){
//   console.log("Start")
//   const s1 = await p1;
//   console.log(s1);
//   const s2 = await p2;
//   console.log(s2);
//   console.log("End");
//   console.timeEnd("Start") //Check the time of the operation
// }
// serialOps();


//Coffee shop example
// function placeOrder(drink){
//   return new Promise(function(resolve,reject){
//   if(drink === "coffee"){
//     resolve("Order placed for coffee");
//   }
//   else{
//     reject("Sorry,we only serve coffee");
//   }
//   })
// }
// placeOrder("tea").then(msg=> console.log(msg)).catch(msg=>console.log(msg))
// placeOrder("coffee").then(msg=> console.log(msg)).catch(msg=>console.log(msg))

// function processOrder(order){
//   return new Promise((resolve,reject)=>{
//     resolve(`${order}-> processed and served`)
//   })
// }

// function generateBill(processOrder){
//   return new Promise(resolve=>{
//     resolve(`${processOrder}-> bill generated (rs 200)`);
//   })
// }

// placeOrder("tea")
// .then(order=>{
//   console.log(order)
//   return processOrder(order)
// })
// .then(processOrder=>{
//   console.log(processOrder)
//   return generateBill(processOrder)
// })
// .then(bill=>{
//   console.log(bill)
// })
// .catch(err=>console.log(err))

//Same serial operation using aync and await
// async function Ops(drink){
// let o1 = await placeOrder(drink)
// console.log(o1)
// let o2 = await processOrder(o1)
// console.log(o2)
// let o3 = await generateBill(o2)
// console.log(o3)
// }
// Ops("tea")

 //Handling error in async functions

// async function serveOrder(drink){
// try{
// let o1 = await placeOrder(drink)
// console.log(o1)
// let o2 = await processOrder(o1)
// console.log(o2)
// let o3 = await generateBill(o2)
// console.log(o3)
// }
// catch(err){
//   console.log(err)
// }
// }
// serveOrder("tea")

//Promise.all
function fetchUser(){
  return new Promise(resolve=>{setTimeout(()=>resolve("user data"),2000)});

}
function fetchAnalytics(){
  return new Promise((resolve,reject)=>{setTimeout(()=>resolve("Promise rejected"),2000)})
}
function fetchActivity(){
  return new Promise(resolve=>{setTimeout(()=>resolve("user data"),1500)})
}

let result = Promise.all([fetchUser(),fetchAnalytics(),fetchActivity()]);
result.then(msg=>console.log(msg)).catch(err=>console.log(err))




