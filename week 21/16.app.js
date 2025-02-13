//Spread in array
let arr = [1, 2 ,3 ,4 ,5];
console.log(Math.min(...arr));
console.log(...arr);             //Accessing each element

//Spread in String
console.log(..."apnacollege");

//New array using Spread in Array literals
let arr2 = [ 1 , 2 , 3 , 4 , 5 ];
let newArr = [...arr2];
console.log(arr2);
console.log(newArr);
newArr.push(-1);
console.log(newArr);

let chars = [..."hello"];
console.log(chars);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let nums = [...even , ...odd];
console.log(nums);

//New array using Spread in Object literals
const data = {
    email : "ironman@gmail.com",
    password : "abcd",
};
const dataCopy = {...data , id : 123 , country : "India"};
console.log(data);
console.log(dataCopy);


arr = [1,2,3,4,5,6,7,8,9,10];       //val
let obj1 = {...arr};                //obj -> key:val      //Converting array into object using spread
console.log(obj1);

let obj2 = { ..."hello"};
console.log(obj2);                  //Converting string into object using spread