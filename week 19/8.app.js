//Function Scope and Global Scope
let sum = 54 ;         //Global Scope

function calSum(a,b) {
    let sum = a+b;     //Function Scope
    console.log(sum);
}

calSum(1,2);
console.log(sum);

//Block Scope
// {
//     let a = 25;
// }
// console.log(a);
for (let i=1 ; i<=5 ; i++) {
    console.log(i);          //Block Scope
}
// console.log(i); i cannot be used outside block i.e. for loop.
let age = 25;
if (age >=18) {
    let str = "adult";
    console.log(str);
}
// console.log(str); str cannot be used outside block i.e. if statement.


//Lexical Scope (Used in nested functions)
function outerFunc() {
    let x = 5;
    let y = 6;
    function innerFunc() {
        console.log(x);
        console.log(y);
    }
    innerFunc();
}