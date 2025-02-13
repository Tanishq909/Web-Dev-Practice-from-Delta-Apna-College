// Arrow Functions
const sum = (a,b) => {
    console.log(a+b);                        //function definition
}
sum(2,3);                                    //function call


const cube = (n) => {
    return n * n * n;                        //function definition
}
console.log(cube(6));                        //function call


const pow = (a,b) => {
    return a**b;                              //function definition
}
console.log(pow(2,3));                        //function call


const hello = () => { 
    console.log("Hello world");                //function definition
}
console.log(hello());                          //function call


//Implicit return in Arrow Functions
const mul = (a,b) => (
        a * b
);
console.log(mul(2,3));

const sum1 = (a,b) => (
    a+b
);                                             //function definition

console.log(sum1(2,3));                        //function call


const cube1 = (n) => (
     n * n * n                                  //function definition
)
console.log(cube1(6));                          //function call


const pow1 = (a,b) => (
    a**b                                        //function definition
);
console.log(pow1(2,3));                         //function call


const hello1 = () => (   
    "Hello world"                               //function definition
)
console.log(hello1());                          //function call
