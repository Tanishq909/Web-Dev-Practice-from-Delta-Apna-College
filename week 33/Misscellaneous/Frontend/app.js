let arr1 = [1,2,3];
let arr2 = []

arr1.sayHello = () => {
    console.log("hello");
}

arr2.sayHello = () => {
    console.log("hello");
}

console.log(arr1.__proto__);  //copy of prototype object
console.log(Array.prototype); //original prototype object

console.log(arr1.sayHello === arr2.sayHello);

console.log("abc".toUpperCase === "xyz".toUpperCase)
// const stu1 = {
//     name : "ADam",
//     age : 25,
//     marks : 95,
//     getMarks :function() {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name : "eve",
//     age : 25,
//     marks : 99,
//     getMarks :function() {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name : "casey",
//     age : 23,
//     marks : 85,
//     getMarks :function() {
//         return this.marks;
//     },
// };

