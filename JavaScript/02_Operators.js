// Arithmatic operations
console.log("Operators : ");
let a = 6;
let b = 3;

console.log("a + b = ", a + b);
console.log(" a x b = ", a * b);
console.log("a / b = ", a / b);
console.log("a - b = ", a - b);
console.log("a % b = ", a % b);

console.log("Conditional Statements : ");

let age = 19;
if(age >= 18 && age <100){
    console.log("You can Vote");
}
else if(age <18 && age >0){
    console.log("You can not vote.");
}
if(age<0 || age>100){
    console.log("Invalid age.")
}