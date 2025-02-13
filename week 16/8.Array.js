//ANSWER 1
let months = ["january","july","march","august"];

console.log("BEFORE ",months);
console.log(months.shift());
console.log(months.shift());
console.log(months.unshift("june"));
console.log(months.unshift("july"));

console.log("AFTER ",months);