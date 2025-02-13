// let n = 5 ;

// for(let i=0;i<n;i++) {
//     console.log("hello",i);
// }

// console.log("bye!");

// let args = process.argv;

// for(let i=2;i<args.length;i++) {
//     console.log("hello to ",args[i]);
// }
// console.log(process.argv);

//Taking arguments 
const someValue = require("./math");

console.log(someValue);
console.log(someValue.sum(2,2));
console.log(someValue.PI);

const info = require("../Fruits")   //Directory
console.log(info);
console.log(info[0].name);

