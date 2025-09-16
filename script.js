//OBJECT
const student = {
  fullName: "rishav",
  age:20,
  cgpa:9.1,
  isPass:true
  //key:value pairs
};
console.log(student);       //printing object
console.log(student.fullName);
student["age"] = student["age"] + 1;   //updating age
console.log(student.age);
student["fullName"] = "ram";     //updating name
console.log(student.fullName);