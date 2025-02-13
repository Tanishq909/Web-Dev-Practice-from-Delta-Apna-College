// Set Interval Function
console.log("Hi there!");

// setTimeout ( () => {
//     console.log("Apna College");
// } , 4000);                      //4000ms = 4second


let id = setInterval ( () => {
    console.log("Apna College");
} , 2000);
console.log(id);

let id2 = setInterval ( () => {
    console.log("Hello World");
} , 3000); 
console.log(id2);


//Clear hoga by this(stop that setTimeout function)
// clearInterval(id);
// clearInterval(id2);