//Functions Examples
function hello() {
    console.log("Hello!");
}

function printName() {
    console.log("apna college");
    console.log("shradha khapra");
}

function print1to5() {
    for (let i=0 ; i<=5 ; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = 13;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("Not Adult");
    }
}
hello();
printName();
print1to5();
isAdult();

//ANSWER 1
function printPoem() {                                 //function declaration
    console.log("Twinkle Twinkle , little star");
    console.log("How I wonder what you are ");
}
printPoem();                                           //function call

//ANSWER 2
function rollDice() {                                  //function declaration
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();                                            //function call