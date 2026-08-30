// // console.log("Welcome to script 1")
// // var a ="SCaler"
// // console.log(a);
// // var a = 20;
// // console.log(a);
// let student={
//   name:"Axel",
//   age:24,
//   subjects:["English","Bio","Chem","Mathematics"],
//   address:{
//     city:"SanDiego",
//     pincode:100
//   },
//   introduce: function(){
//     console.log("Hi My name is Axel and I am in senior year of high School")

//   },
//   isEnrolled:true
// }
// console.log(student.subjects[1])
// console.log(student.address.city)
// console.log(student.age)
// student.age=25;
// console.log(student.age)
// student.grade="A"
// console.log(student.grade)
// console.log(student.isEnrolled)
// delete student.isEnrolled
// console.log(student.isEnrolled)
// student.introduce()
//Function declaartion 
function name(name1){
    console.log(`Hello my name is ${name1}`)
}
name("Brick")
function age(age){
    console.log("My age is "+age)
}
age(9)
//functiom expression - this is  a method of defining functions where a function is stored inside a varaible 
let grade= function(grade){
    console.log(`I am in grade ${grade}`)
}
grade(5)

student={name:"mike",age:56,grade:"A",
    sayHi:function(){//assigning functions as property inside an object
        console.log("My name is Mike")
    }
}



