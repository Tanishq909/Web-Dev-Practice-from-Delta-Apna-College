//Visualizing Array Methods
let marks = [ 99 , 85 , 93 , 76 , 62 ];
let names = [ "adam" , "bob" , "catlyn" ];
let info = [ "amankapoor" , 25 , 6.1];                   //mixed array
let newArr = [];                                   //empty array

console.log(info);
console.log(info.length);
console.log([1,2,3,4].length);
console.log(info[0]);
console.log(info[0][0]);          //Accessing the first word of first element of array
console.log(info[0][1]);          //Accessing the second word of first element of array
console.log(info[0].length);      //Accessing the length of first element of array

//Arrays are mutable
let fruits = ["mango","apple","litchi"];
console.log(fruits);
fruits[0] = "banana";
console.log(fruits);
fruits[1] = "pineapple";
console.log(fruits);

fruits[10] = "papaya";
console.log(fruits);        //baaki elements empty ho jayege
                            //['banana', 'pineapple', 'litchi', empty × 7, 'papaya']

//Arrays Methods
//Use of push & pop 
let cars = ["audi","bmw","xuv","maruti"];
console.log(cars.push("toyato"));         //Add new element "toyato" in the last
console.log(cars);
console.log(cars.push("ferrari"));        //Add new element "ferrari" in the last
console.log(cars);


console.log(cars.pop());                 //remove last element from array
console.log(cars.pop());                 //remove last element from array
console.log(cars);

//Use of unshift & shift
cars = ["audi","bmw","xuv","maruti"];
console.log(cars.unshift("toyato"));         //Add new element "toyato" in the start
console.log(cars);
console.log(cars.unshift("ferrari"));        //Add new element "ferrari" in the start
console.log(cars);


console.log(cars.shift());                 //remove first element from array
console.log(cars.shift());                 //remove first element from array
console.log(cars);