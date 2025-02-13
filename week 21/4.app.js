//Map in Array
let num = [ 1 , 2 , 3 , 4 ];

let double = num.map((el) => {
    return el*2;
});
console.log(double);

//Map in Arrays of Objects
let students = [{
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
let sgpa = students.map((el) => {
    return el.marks/10;
});
console.log(sgpa);

// Filter in Array
let nums = [1,2,3,4,0,5,6,7,8,2,9,10,12,11];
let ans = nums.filter((el) => {
    return el % 2 == 0;        //even --> true , odd --> false
});
console.log(ans);
let ans2 = nums.filter((el) => {
    return el < 5;
})
console.log(ans2);