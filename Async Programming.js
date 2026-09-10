//Q1 Callbacks
// function fakeDownload(url, callback) {
//   // Write code here...
//   console.log(`Downloading from ${url}`)
//   setTimeout(()=>{
//   callback("Download Complete")
//   },2000);
// }
// // Usage
// fakeDownload("https://example.com/file", (msg) => {
//   console.log(msg); // Expected Output: "Download complete!" (after 2 sec)
// });

// //Q2. Convert callback to a promise
// function fakeDownload(url){
//     console.log(`Downloading from ${url}`)
//     return new Promise(function(resolve){
//        setTimeout(function(){
//        resolve("Download Complete!")
//        },2000)    
//     })
// }
// // Usage:
// fakeDownload("https://example.com/file").then((message) =>
//   console.log(message)
// ); // Expected Output: "Download complete!" (after 2 sec)
 
//Q3.  Fetch a random cat fact from "https://catfact.ninja/fact" and log it.

// function fetchCatFact() {
//   // Write code here...
// let data = new Promise(function(resolve,reject){
// let v1 = fetch("https://catfact.ninja/fact") //fetch returns a promise
// //Here .then and .catch were used to check if the data was fetched succesfully or not 
// v1
// .then(function(response){resolve(response)})
// .catch(function(){reject("fetch failed from API")})

// })

// data
// .then(function(response){
//     let v2 = response.json();
//     return v2
// })
// .then(function(v2){
//     console.log(Object.values(v2)[0])
// })
// .catch(function (err){
//     console.log(err)
// })

// }
//  // Usage:
// fetchCatFact();

//Q3. Another approach- Fetch a random cat fact from "https://catfact.ninja/fact" and log it.
function fetchCatFact() {
  // Write code here...
fetch("https://catfact.ninja/fact").then(response=>response.json()).then(data=>{console.log(data.fact)}).catch(err=>console.log(err))
}
 // Usage:
fetchCatFact();


