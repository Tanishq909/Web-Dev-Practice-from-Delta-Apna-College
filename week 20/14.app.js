//ANSWER 1
const square = (n) => (
    n * n
);
console.log(square(6));
//OR
const square1 = (n) => {
    return n * n;
};
console.log(square1(8));

//ANSWER 2
let id = setInterval( () => {
    console.log("Hello World");
},2000);
setTimeout( () => {
    clearInterval(id);
    console.log("clear interval ran");
},10000);
