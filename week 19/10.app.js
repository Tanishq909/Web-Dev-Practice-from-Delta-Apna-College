//ANSWER
let greet = "hello";                   //Global Scope

function changeGreet() {
    let greet = "namaste";             //Function Scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);            //Lexical Scope
    }
}

console.log(greet);
changeGreet();