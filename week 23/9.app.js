let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let p = document.querySelector('p');
let btn = document.querySelector('button');


//To reduce redundancy
function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = 'blue';
}
h1.addEventListener('click',changeColor)

h2.addEventListener('click',changeColor)

h3.addEventListener('click',changeColor)

p.addEventListener('click',changeColor)

btn.addEventListener('click',changeColor)