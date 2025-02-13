function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    ans = two() + one();
    console.log(ans);
}

three();


console.log(two() + one());
console.log(two() + one() == three());   //true