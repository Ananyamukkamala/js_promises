// const student ={
//     name:"Rithik",
//     introduce :function (){
//         console.log(this);
//         console.log("Hi I am ", this.name)
//     }
// }
// //Method Borrowing
// student.introduce();
//  const teacher = {
//     name:"Ayush",
//     introduce: student.introduce
//  }
//  teacher.introduce();

//  const car ={
//     name:"Audi",
//     color:"Red",
//     introduce: student.introduce
//  }
//  car.introduce();

//  const bike ={
//     name: "Hitachi",
//     model:"MT100",
//     introduce:student.introduce

//  }
//  bike.introduce();

//Constructor Function
// function id(name,age){
//     this.name = name
//     this.age = age
// }
//  let p1 = new id("Anu","24")
//  console.log(p1)
// console.log(this)
//  function test(){
// console.log(this)
//  }
//  test();
//Nested function 
"use strict"
// const cars = {
//     name:"Mercedes",
//     color:"Red",
//     speed(){
//         // console.log(this)
//         function distance (){
//             console.log(this)
//         }
//         distance();
//     }
// }
// cars.speed();
// console.log(this)
// function test1(){
//     console.log(this)
// }
// test1();
// function id1(name){
//  this.name = name
// }
   
// const p1 = new id1("Rithik");
// const p2 = new id1("Sanjay");

const ob1 ={ name:"Rithik",
    greet(){
        console.log("Hello from",this.name)
    }
}
const ob2 = {name:"Sanjay",
    greet:ob1.greet
}
ob1.greet();
ob2.greet();
 

