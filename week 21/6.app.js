//Every
let a = [1,2,3,4].every( (el) => {
    return el % 2 == 0;
})
console.log(a);         //prints false

let b = [2,4,6,8].every( (el) => {
    return el % 2 == 0;
})
console.log(b);         //prints true

//Some
let c = [1,2,3,4].some( (el) => {
    return el % 2 == 0;
})
console.log(c);         //prints true

let d = [1,3,5].some( (el) => {
    return el % 2 == 0;
})
console.log(d);         //prints false
