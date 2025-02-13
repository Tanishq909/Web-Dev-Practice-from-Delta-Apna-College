//forEach (Array Method)
let arr = [ 1 , 2 , 3 , 4 , 5 ];

console.log("forEach accessing the function in each element");

let print = function (el) {
    console.log(el);
}
arr.forEach(print);

// OR
console.log("forEach accessing the inner function in each element of array.");
arr.forEach(function (el){
    console.log(el);
});

// OR
console.log("forEach accessing the arrow function in each element of array.");
arr.forEach((el) => {
    console.log(el);
})


//forEach in Arrays of Objects 
let arr1 = [{
    name : "aman",
    marks : 95,
} ,
{
    marks : "shradha",
    marks : 94.4,
} ,
{
    name : "rajat",
    marks : 92,
}];
arr1.forEach((student)=> {
    console.log(student.marks);
});