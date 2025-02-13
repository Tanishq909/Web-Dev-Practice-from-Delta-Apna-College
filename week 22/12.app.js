//AMSWER 1
let btn = document.createElement('button');
let body = document.querySelector('body');
console.log(body.append(btn));
console.log(btn.innerText = "Click me");
let input = document.createElement('input');
console.log(body.append(input));

//ANSWER 2
console.log(input.placeholder = "username");
console.log(btn.id = "btn");

//ANSWER 3
console.log(document.querySelector('btn'));
console.log(btn.classList.add('btnstyle'));

//ANSWER 4
let h1 = document.createElement('h1');
console.log(body.append(h1));
console.log(h1.innerHTML = "<u>DOM Practice </u>");
console.log(h1.style.color = "purple");

//ANSWER 5 
let p = document.createElement('p');
console.log(body.append(p));
console.log(p.innerHTML = "Apna College <b>Delta</b> Practice");

