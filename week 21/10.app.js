///Finding Maximum in an array using looping
let arr = [1,4,2,5,6,7,2,9,2];

let max = 0;
for (let i = 0; i<arr.length ; i++) {
    if(max < arr[i]) {
        max = arr[i];
    }
}
console.log(max);
//Finding Maximum in an array using reduce method

let nums = [1,4,2,5,6,7,2,9,2];
max = nums.reduce( (max,el) => {
    if(max<el) {
        return el;
    }
    else {
        return max;
    }
});
console.log(max);