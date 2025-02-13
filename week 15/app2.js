//Conditional Statements
//i)if statement

console.log("before my if statement");
    let age1 = 23 ;
    if (age1 >= 18) {
        console.log("you can vote");
    }

    if (age1 < 18) {
        console.log("you cannot vote");
    }
console.log("after my if statement");

//Practice Q1s :- Create a traffic light system that shows what to do based on order.

    let color = "red";
    //Traffic Light System
    if (color ==  "red" ) {
        console.log("Stop! light color is red")
    }
    if (color ==  "yellow" ) {
        console.log("Slow down. light color is yellow")
    }
    if (color ==  "green" ) {
        console.log("Go. light color is green")
    }

    //Else if Statement
    let marks = 46;

    if (marks >= 80) {
        console.log("A++");
    }
    else if (marks >= 60) {
        console.log("A");
    }
    else if (marks >= 33) {
        console.log("B");
    }
    else if (marks < 33) {
        console.log("F");
    }

let month = "january";
if (month == "january") {
    console.log("winter is here");
}
else if (month == "april") {
    console.log("summer is here");
}

//Else statement
let age2 = 18;
if (age >= 18) {
    console.log("you can vote");
}
else {
    console.log("you cannot vote");
}

color = "blue";
if (color ==  "red" ) {
    console.log("Stop! light color is red")
}
else if (color ==  "yellow" ) {
    console.log("Slow down. light color is yellow")
}
else if (color ==  "green" ) {
    console.log("Go. light color is green")
}
else {
    console.log("traffic light is broken.")
}


//Practice Q2s:- Create a system to calculate popcorn prices based on the size customer asked for:
// if size is "XL",price is Rs.250
// if size is "L",price is Rs.200
// if size is "M",price is Rs.100
// if size is "S",price is Rs.50
let size = "XL";
if (size == "XL") {
    console.log("price is Rs.250");
}
else if (size == "L") {
    console.log("price is Rs.200");
}
else if (size == "M") {
    console.log("price is Rs.100");
}
else {
    console.log("price is Rs.50");
}


//Nested if-else Statements
let marks1 = 88;
if (marks1 >= 33) {
    console.log("Pass");
       if (marks1 >= 80) {
        console.log("Grade : O");
       }
       else {
        console.log("Grade : A");
       }
}
else {
    console.log("Better luck next time!");
}