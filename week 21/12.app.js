//ANSWER 1
let num1 = [10,20,30,40];
let ans1 = num1.every((el) => el%10 == 0);
console.log(ans1);

//ANSWER 2
let num2 = [5, 4, 2, 5, 6, 7, 2, 9, 2];

function getMin(num2) {
    let min = num2.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min; // Added return statement here
};
console.log(getMin(num2)); // Output will be 2