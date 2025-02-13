//indexOf Method
let cars = ["audi","bmw","xuv","maruti"];
console.log(cars.indexOf("bmw"));                //1
console.log(cars.indexOf("xuv"));                //2
console.log(cars.indexOf("XUV"));                //-1

//includes Method
console.log(cars.includes("audi"));                //true
console.log(cars.includes("toyato"));              

//Concatenation
let primary = ["red","yellow","blue"];
let secondary = ["orange","green","violet"];
Merge = primary.concat(secondary);
console.log(Merge);                           //phele primary elements phir secondary
Merge1 = secondary.concat(primary);
console.log(Merge1);                          //phele secondary elements phir primary

//Reverse
cars = ["audi","bmw","xuv","maruti"];
cars.reverse();                               //reverse the original array
console.log(cars); 
cars.reverse();                               //reverse again the array
console.log(cars); 

//slice
let colors = ["red","yellow","blue","orange","green","violet"];
console.log(colors.slice());
console.log(colors.slice(2));
console.log(colors.slice(2,3));
console.log(colors.slice(-2));

//splice
colors = ["red","yellow","blue","orange","pink","white"];
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

//sort
let chars = ['b','d','e','a'];
console.log(chars);
console.log(chars.sort());

let marks = [99,89,67,42,100];
console.log(marks);
console.log(marks.sort());                 //wrong galat sorting