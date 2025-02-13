//Async Keyword
//Creates an async function ----> make a simple function to promise object

async function greet() {
    // throw "weak connection";
    return "hello";
}

greet()
   .then((result) => {
    console.log("promise was resolved");
    console.log("result was :",result);
   })
   .catch((error) => {
    console.log("promise was rejected with error :",error);
   })