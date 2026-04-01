// For Loop
console.log("Print your name 10 times.")
for (let i =0; i<10; i++){
    console.log("Shreyash Sature.");
}

console.log("Print Sum from 0 to n : ");
let sum = 0;
let n =100;
for(let i = 0; i<=n;i++){
    sum += i;
    
}
console.log("Sum is ", sum);

// while Loop
console.log("using while loop : ");
let j=1;
let k =5;
let summ=0;
while(j<=k){
    summ += j;
    j++;
}
console.log("Sum : ",summ)

//for-of Loop
console.log("for-of loop");
let str = "Shreyash";
for(let char of str){
    console.log(char);
}

// Print all even number from 0 to 100
console.log("Print all even numbers from 0 to 100 :")
let num=100;
for(let i =0; i<=100; i++){
    if(i%2==0){
        console.log(i);
    }
}
