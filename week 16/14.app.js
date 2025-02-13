//Array References
let arr = ['a','b','c'];
let arrCopy = arr;
console.log(arr == arrCopy);              //true
console.log(arr === arrCopy);             //true

arr.push('d');
console.log(arr);                   //Changes will be in both arrays
console.log(arrCopy);               //Changes will be in both arrays

arrCopy.pop();
console.log(arr);                   //Changes will be in both arrays
console.log(arrCopy);               //Changes will be in both arrays

//Constant Arrays
const arr1 = [1,2,3];
arr1.push(4);
console.log(arr1);
arr1.pop();
console.log(arr1);
// arr1 = ['a','b','c'];                 //TypeError Assignment to constant variable

//Nested Arrays (array of arrays)(multidimensional)
let nums = [ [2,4] , [3,6] , [4,8]];        //Make a matrix of order 2 * 3
console.log(nums);
console.log(nums[0]);
console.log(nums[0][0]);                    //nums[rows][columns]
console.log(nums[0].length);
