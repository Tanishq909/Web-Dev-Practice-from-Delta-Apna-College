//ANSWER 1
const arrayAverage = (arr) => {
    let sum = 0;
    for (let i=0;i<arr.length;i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
let arr = [1,4,5,6,7];
console.log(arrayAverage(arr));

//ANSWER 2
let num = 6.4;
const isEven = n => {
    if(n%2==0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(isEven(num));

//ANSWER 3
const object = {
    message : 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
}
setTimeout(object.logMessage(),1000);

//AMSWER 4
let length = 4;
function callback() {
    console.log(this.length);
}

const object1 = {
    length : 5,
    method(callback) {
        callback();
    }
};

object1.method(callback , 1 , 2);