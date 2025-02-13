//ANSWER 2
let body = document.querySelector('body');
let btn = document.createElement('button');

body.append(btn);
btn.innerText = "HI Tanishq Kumar";

btn.addEventListener('click',function() {
    btn.style.backgroundColor = "green";
    console.log("Button color changed")
})


//AMSWER 3  
let inp = document.createElement('input');
body.append(inp);
inp.placeholder = "enter your name";
let h2 = document.createElement('h2');
body.append(h2);

inp.addEventListener('input',function(event) {
    console.log(this.value);
    h2.innerText = this.value;
}) 