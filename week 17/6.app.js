let favMovie = "Kanjoos Makhijoos";

let guess = prompt("Guess my favorite movie :");

while ( (guess != favMovie) && (guess != "quit")) {
    console.log("wrong guess");
    guess = prompt("Wrong guess . please try again");
}

if (guess == favMovie) {
    console.log("Congrats!");
}
else {
    console.log("You quit the game");
}


//After break keyword
favMovie = "Kanjoos Makhijoos";

guess = prompt("Guess my favorite movie :");

while ( guess != favMovie ) {
    if (guess != "quit") {
        console.log("You quit the game");
        break;
    }
    console.log("wrong guess");
    guess = prompt("Wrong guess . please try again");
}

if (guess == favMovie) {
    console.log("Congrats!");
}
