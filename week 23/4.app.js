// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function() {
//     alert("button was clicked");
// };

let btns = document.querySelectorAll('button');

for(btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function() {
        console.log("you double clicked me");
    })
} 
function sayHello() {
    alert("Hello!");
}

function sayName() {
    alert("Apna College!");
}

// btn.onclick = sayHello ; 

//Event listener for p
let p = document.querySelector('p');

p.addEventListener('click',function() {
    console.log('parah was clicked');
})

//Event listener for div
let div = document.querySelector('div');

div.addEventListener('mouseenter',function() {
    console.log("mouse inside div");
})