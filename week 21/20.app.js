//Destructuring in Arrays
let names = ["tony","bruce","peter","steve","abc","xyz","pyq"];
let winner = names[0];
let runnerup = names[1];
let secondRunnerup = names[2];

let [winner1,runnerup1,secondRunnerup1,...others] = names;   //using rest

console.log(winner);
console.log(winner1);
console.log(runnerup);
console.log(runnerup1);
console.log(secondRunnerup);
console.log(secondRunnerup1);
console.log(others);

//Destructuring in Objects
const student = {
    name : "karan",
    age : 17,
    class : 9,
    subjects : ["hindi","english","math","science"],
    username : "karan@123",
    password : "abcd",
    city : "Pune",
};

let { username : user , password : secret , city : place = "Mumbai"} = student;

console.log(user);
console.log(secret);
console.log(place);
