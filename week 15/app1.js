//Comparison Operators(To compare 2 values)
// < , > , <= , >= , == , === ,!= 
let age = 23;
console.log(age>=18);

//== compares value , not type
    "123" == 123           //true
    1 == "1"               //true
    0 == ""                //true
    0 == false             //true
    null == undefined      //true

//=== compares type & value
    "123" === 123              //false
    1 === '1'                  //false
    0 === ' '                  //false
    0 === false                //false
    null === undefined         //false

let n = 5;
let str = '5';
typeof n;
typeof str;
n == str;    //true
console.log(n == str);     //true

console.log(4 == str);     //false

console.log(n === str);     //false

//Comparison for non-numbers
// 'a' -> 61 , 'b' -> 62...
// 'A' -> 41 , 'B' -> 42...

console.log('a'>'b');       //false

console.log('A'<'B');       //true

console.log('a'>'A');       //true

console.log('*'<'&');       //false



















