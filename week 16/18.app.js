//ANSWER 1
let arr = [7, 9, 0, -2];
n = 3;
let ans1 = arr.slice(0,n);
console.log(ans1);

//ANSWER 2
 arr = [7, 9, 0, -2];
n = 3;
let ans2 = arr.slice(arr.length-n);
console.log(ans2);

//ANSWER 3
let str = prompt("please enter a string");
if (str.length == 0) {
    console.log("String is empty.");
}
else {
    console.log("String is not empty.");
}

//ANSWER 4
let name = "ApNaCOllege";
let a = 3;
if (name[a] == name[a].toLowerCase) {
    console.log("Character is lowercase");
}
else {
    console.log("Character is not lowercase");
}

//ANSWER 5
str = prompt("please enter a string");
console.log(str.trim());

//ANSWER 6
let ARR = ["hello",'a',23,64,99,-6];
let item = 64;

if (arr.indexOf(item) != -1) {
    console.log("Element exists in an array");
}
else {
    console.log("Element doesn't exists in an array");
}