//ANSWER 1
let nums = [1,2,3,4,5,6,7,8,9,10];
let square = nums.map((el) => el * el);
console.log(square);

let sum = square.reduce((sum,el) => sum + el);
let ans = sum / nums.length;
console.log(ans);

//ANSWER 2
let num2 = [1,3,5,7,6,2];
let newArr = num2.map((el) => el + 5);
console.log(newArr);

//ANSWER 3
let new3 = ["tanishq","karan","tasu"];
let newArr2 = new3.map((el) => el.toUpperCase());
console.log(newArr2);

//ANSWER 4
const doubleAndReturnArgs = (arr,...args) => [
    ...arr,
    ...args.map((v) => v * 2),
];
console.log(doubleAndReturnArgs([1,2,3],4,5));

//ANSWER 5
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObjects({a:1,b:2},{c:3,d:4}));