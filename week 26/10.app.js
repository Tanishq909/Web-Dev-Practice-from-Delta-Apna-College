//viewing the JSON object
let jsonRes = 
`{"fact":"A cat has the ability to rotate their ears 180 degrees,with the help of 32 muscles that they use to control them.","length":113}`;

console.log(jsonRes);

//Converting the JSON data into JS object
let validRes = JSON.parse(jsonRes);
console.log(validRes);
console.log(validRes.fact);
console.log(validRes.length);

//Converting the JS object into JSON data
let student = {
    name : "shradha",
    marks : 95,
}
let data = JSON.stringify(student);
console.log(data);