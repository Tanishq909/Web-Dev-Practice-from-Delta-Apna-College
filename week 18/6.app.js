//Guessing Game
const max = prompt("Enter a max number :");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while (true) {
    if (guess == "quit") {
        console.log("User quit");
        break;
    }
    if (guess == random) {
        console.log("You are right! Congrats!! random number was",random);
        break;
    }
    else if (guess < random) {
        guess = prompt("Your guess are too small.Please try again");
    }
    else {
        guess = prompt("Your guess are too large.Please try again");
    }
};