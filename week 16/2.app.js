//Strings are immutable in JavaScript
//string.trim();

let msg = "  He  llo   ";  
msg1 = msg.trim();
console.log(msg1);
console.log(msg);

let password = prompt("Set your password");
newPass = password.trim();
console.log(newPass);

//ToUpperCase and ToLowerCase
let str = "Random String";
str1 = str.toUpperCase();
console.log(str1);                //RANDOM STRING
str2 = str.toLowerCase();
console.log(str2);                //random string

//IndexOf (Use of argument)
str = "IloveCoding";

a = str.indexOf("love");              //1
console.log(a);

b = str.indexOf("j");              //-1(not found)
console.log(b);

c = str.indexOf("o");              //2
console.log(c);

//Method Chaining (Left to Right use hota hai)
let Msg = "    hello    ";
// let newMsg = Msg.trim();
// console.log("after trim : ", newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after uppercase : ", newMsg);
let newMsg = Msg.trim().toUpperCase();
console.log("after trim and uppercase : ", newMsg);


//slice method
//string.slice(start,end);  start se end-1 inclusive 
let st = "IloveCoding";
console.log(st.slice(1,5));     //1 se 4 tak             //love
console.log(st.slice(5));       //5 se last tak          //Coding
console.log(st.slice(-2));      //st.length -2 = 10-2=8  //ng


//Replace & Repeat Method
let fruit = "Mango";
console.log(fruit.replace('Man','go'));                  //gogo
console.log(fruit.repeat(5));                            //MangoMangoMangoMangoMango
 
