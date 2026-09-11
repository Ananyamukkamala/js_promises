const student ={
    name:"Rithik",
    introduce :function (){
        console.log(this);
        console.log("Hi I am ", this.name)
    }
}
student.introduce();
 const teacher = {
    name:"Ayush",
    introduce: student.introduce
 }
 teacher.introduce();

 const car ={
    name:"Audi",
    color:"Red",
    introduce: student.introduce
 }
 car.introduce();