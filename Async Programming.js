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
// function fetchCatFact() {
//   // Write code here...
// fetch("https://catfact.ninja/fact").then(response=>response.json()).then(data=>{console.log(data.fact)}).catch(err=>console.log(err))
// }
//  // Usage:
// fetchCatFact();


// Q4 Fetch and Display User Data (async/await & Error Handling)
// Create a random user generator using the "https://randomuser.me/api/" API.
// When a user clicks the "Get Random User" button, fetch user details and display them on the page, including:

// Full Name
// Email
// Country
// Handle API errors and provide appropriate feedback if the fetch fails.
 
async function fetchRandomUser() {
  // Write code here...
let response = await fetch("https://randomuser.me/api/")
let data = await response.json()
// console.log(data)
let disp = Object.values(data)[0]
// console.log(disp)
// console.log(disp)
let user = disp[0]
// console.log("Name: " + user.name.title+" "+user.name.first+" "+user.name.last)
// console.log("Email: "+ user.email)
// console.log("Country: "+user.location.country)
pname.innerHTML = user.name.title+" "+user.name.first+" "+user.name.last
pemail.innerHTML = user.email
pcountry.innerHTML = user.location.country
let body = document.querySelector("body")
body.appendChild(pname)
body.appendChild(pemail)
body.appendChild(pcountry)

}
 //Select the element in the DOM
 //Add the event listener
 let Ebutton = document.querySelector("#fetchUserBtn")
 let pname = document.querySelector("#userName")
 let pemail = document.querySelector("#userEmail")
 let pcountry = document.querySelector("#userCountry")

 Ebutton.addEventListener('click', fetchRandomUser)







