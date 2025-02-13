//ANSWER 1
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for (let i=0 ; i<arr.length ; i++) {
    if (arr[i] == num) {
        arr.splice(i,1);
    }
}
console.log(arr);

//ANSWER 2 :-Qs2. Write a JS program to find the no of digits in a number.
    // Example : if number = 287152, count = 6
let number = 287152;
let count = 0;

let copy = number;
while (copy > 0) {
    count = count + 1;
    copy = Math.floor(copy / 10);          //math.floor is used for integer division
}
console.log(`The number of digits of ${number} is ${count}`);


//ANSWER 3 Qs3. Write a JS program to find the sum of digits in a number.
    // Example : if number = 287152, sum = 25.
let nums = 287152;
let sum = 0;
let digit=0;
copy = nums;
while (copy > 0) {
    sum = sum +  digit ;
    digit = copy % 10 ;
    copy = Math.floor(copy / 10);          //math.floor is used for integer division
}
console.log(`The sum of digits of ${nums} is ${sum}`);

//ANSWER 4
//Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
//     given positive integer and denoted by that integer. ]
let n = 5;
let fact = 1;
for (let i=1 ; i<=n ;i++) {
    fact = fact * i;
}
console.log(`factorial of ${n} is ${fact}`);

//AMSWER 5
//Qs5. Find the largest number in an array with only positive numbers.
let array = [6,7,2,4,7,6,6,9,1];
let largest = 0;
for ( i=0 ; i<array.length ; i++) {
    if (largest < array[i]) {
        largest = array[i];
    }
}
console.log(largest);