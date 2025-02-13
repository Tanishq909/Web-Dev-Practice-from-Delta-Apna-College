//JS Object Literals
let student = {
    name : "shradha",
    age : 23,
    marks : 94.4
};
console.log(student);

let delhi = {
    latitude : "28.7041 degree N",
    longitude : "77.1025 degree E"
}
console.log(delhi);

const item = {
    price : 100.99 ,
    discount : 50 ,
    colors : ["red","pink"]
};
console.log(item);

//Thread / Twitter Post
let post = {
    username : "@tanishqkumar2334",
    content : "This is my #firstPost",
    likes : 150,
    reposts : 5,
    tags : ["@apnacollege","@delta"]
};
console.log(post);

// Getting values from object literals
console.log(post["content"]);
console.log(post["tags"]);
console.log(post.likes);

//Convertion in Get Values
const obj = {
    1 : "a",
    2 : "b",
    true : "c",
    null : "d",
    undefined : "e"
};
console.log(obj[1]);
console.log(obj[2]);                       //2 is converted into string
console.log(obj[true]);                    //true convert into "true"
console.log(obj[null]);                    //null convert into string "null"
console.log(obj[undefined]);               //undefined convert into "undefined" string

//Add / Update Value in Object Literals
student = {
    name : "shradha",
    age : 23,
    marks : 94.4,
    city : "Delhi"
};
console.log(student.city);
console.log(student.city = "Mumbai");
console.log(student);
console.log(student.gender);
console.log(student.gender = "female");
console.log(student);

//Delete a key from object literals
delete student.marks;
console.log(student);

// Object of Objects (Nested Objects)
const classInfo = {
    aman : {
        grade:"A++",
        city:"Delhi",
    },
    shradha : {
        grade:"A",
        city:"Pune",
    },
    karan : {
        grade:"O",
        city:"Mumbai",
    },
};
console.log(classInfo);
console.log(classInfo.aman);
console.log(classInfo.shradha.city);
console.log(classInfo.shradha.city = "Gurgaon");
console.log(classInfo.shradha);
console.log(classInfo);

//Arrays of objects
const ClassInfo = [
    {
        name:"aman",
        grade:"A++",
        city:"Delhi",
    },
    {
        name:"shradha",
        grade:"A",
        city:"Pune",
    },
    {
        name:"karan",
        grade:"O",
        city:"Mumbai",
    },
];
console.log(ClassInfo);
console.log(ClassInfo[2]);
console.log(ClassInfo[1].name);
ClassInfo[1].city = "Gurgaon";
console.log(ClassInfo[1]);
ClassInfo[1].Sex = "Male";
console.log(ClassInfo[1]);
console.log(ClassInfo);

// Math Object
//Properties
console.log(Math.PI);
console.log(Math.E);
//Methods
console.log(Math.abs(-6));             //returns absolute value of any number
console.log(Math.pow(2,3));            //returns power of a ** b
console.log(Math.floor(5.67456789));   //nearest smallest int value
console.log(Math.ceil(5.67456789));    //nearest largest int value
console.log(Math.random());            //Returns a random number between 0 and 1.(1 nahi dega kabhi bhi)

// Random Integers From 1 to 10
let num = Math.random();
num = num * 10;
num = Math.floor(num);                    // from 0 to 9
num = num + 1;                            // from 1 to 10
console.log(num);
    // Summary :  
let random = Math.floor( Math.random() * 10 ) + 1 ;
console.log(random);