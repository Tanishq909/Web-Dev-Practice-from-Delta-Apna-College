//Logical Operators(used to combine expressions)
//Logical AND && :  (exp1)&&(exp2)
true && true     //true
true && false    //false
false && true    //false
false && false   //false

    marks = 82 ;
    if (marks >= 33 && marks >= 80) {   ////true||true = true
        console.log("pass");
        console.log("A+");
    }

//Logical OR || :  (exp1)||(exp2)
true || true     //true
true || false    //true
false || true    //true
false || false   //false

    marks = 75 ;
    if (marks >= 33 || marks >= 80) { //true||false = true
        console.log("pass");
        console.log("A+");
    }

//Logical NOT ! :  !(exp)
!true           //false
!false          //true

    marks = 75 ;
    if (!(marks < 33)) {          //!false = true
        console.log("pass");
        console.log("A+");
    }

//Combined Usage
marks = 23;
if ((marks > 33 && marks <= 80) || !false) {    //Left to right use hota hai
    console.log("pass");       //pass
}

//Practice Q3s :- A "good string" is a string that starts with the letter 'a' 
// & has a length > 3.Write a program to find if a string is good or not.
    let string = "apple";
    if (string[0]=='a' && string.length > 3) {
        console.log("String is good");
    }
    else {
        console.log("String is not good");
    }

//Practice Q4s :- Predict the output of following code :
    let num = 12;
    if ((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
        console.log("safe");
    }
    else {
        console.log("unsafe");
    }

//Truthy & Falsy Everthing in JS is true or false (in boolean context)
//This doesn't mean their value itself is false or true , but they are treated as false or true if taken in boolean context.
//Falsy values :-false,0,-0,On(BigInt value) , ""(empty string) , null, undefined,NaN 
//Truthy values :- Everthing else
string = ' ';
    if (string) {
        console.log("string is not empty.");
    }
    else {
        console.log("string is empty.");
    }

num = 0;
    if (num) {
        console.log("num is not equal to 0.");
    }
    else {
        console.log("num is equal to 0.");
    }