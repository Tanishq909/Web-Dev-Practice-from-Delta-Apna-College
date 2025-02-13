//Default Parameters
function sum(a , b = 2) {
    return a + b;
}
console.log(sum(1));       //1,2  //3
console.log(sum(1,4));     //1,4  //5