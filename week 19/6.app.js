//Functions with Return value //Example 1
function sum(a,b) {
    return(a+b);
}
console.log(sum(1,2));
console.log(sum(sum(1,2),3));

//Functions with Return value //Example 2
function isAdult(age) {
    if (age >=18) {
        return "adult";
    }
    else {
        return "not adult";
    }
}
console.log(isAdult(69));

//ANSWER 5
let sum1 = 0;
function getSum(n) {
    for(let i=1 ; i<=n ; i++){
        sum1 = sum1 + i;
    }
    return sum1;
}
console.log(getSum(12));

//ANSWER 6
function concat(str) {
    let result = "";
    for (let i=0 ; i<str.length ; i++) {
        result = result + str[i];
    }
    return result;
}
let str = ["hi","hello","bye","!"];
console.log(concat(str));