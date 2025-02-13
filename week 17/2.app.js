//For loop
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

for (let i=1 ; i<=10 ; i++) {
    console.log(i);
}

//Backward For loop
for (let i=5 ; i>=1 ; i--) {
    console.log(i);
}
// console.log(i);              //Outside for loop i is not defined, so error aayega outside loop. 

//Print Odd numbers from 1 to 15.
for (let i=1 ; i <= 15 ; i=i+2 ) {
    console.log(i);
}
console.log("backwards");
for (let i=15 ; i>=1 ; i=i-2 ) {
    console.log(i);
}

//Print Even numbers from 1 to 10.
for (let i=2 ; i<=10 ; i=i+2 ) {
    console.log(i);
}
console.log("backwards");
for (let i=10 ; i>=1 ; i=i-2 ) {
    console.log(i);
}

//Print Multiplication Table of 5
for (let i=5 ; i<=50 ; i=i+5) {
    console.log(i);
}

//Print Multiplication Table of n inserted by user
let n = prompt("Write your number :");
n = parseInt(n);
console.log("The multiplication table of",n);
for (let i=n ; i<=n*10 ; i=i+n) {
    console.log(i);
}

//Nested Loops
for (let i=1 ; i<=3 ; i++) {
    console.log("outer loop",i);
    for (let j=1 ; j<=3 ; j++) {
        console.log(j);
    }
}

