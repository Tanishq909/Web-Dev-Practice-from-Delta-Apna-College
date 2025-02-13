//ANSWER i part 
let para1 = document.createElement("p");
console.log(para1);
let body = document.querySelector('body');
console.log(body.append(para1));
console.log(para1.innerText = "Hey I'm red!");
console.log(para1.style.color = "red");

//ANSWER ii part 
let h3 = document.createElement("h3");
console.log(h3);
body = document.querySelector('body');
console.log(body.append(h3));
console.log(h3.innerText = "I'm a blue h3!");
console.log(h3.style.color = "blue");

//ANSWER iii  part 
let div = document.createElement("div");
console.log(div);
body = document.querySelector('body');
console.log(body.append(div));
console.log(div.classList.add("box"));
//ANSWER iii a) part
let h1 = document.createElement("h3");
console.log(h1);
console.log(div.append(h1));
console.log(h1.innerText = "I'm in a div");

//ANSWER iii b) part
let para2 = document.createElement("p");
console.log(para2);
console.log(div.append(para2));
console.log(para2.innerText = "ME TOO!");