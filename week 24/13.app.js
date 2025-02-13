let userSeq = [];
let gameSeq = [];

let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function() {
    if(started == false) {
        console.log("game is started");
        started = true;
    }
    levelUp();
})
function btnflash(btn) {
    btn.classList.add('flash')
    setTimeout(btn.classList.remove('flash'),300);
}
function levelUp() {
    level++;
    h2.innerText = `level ${level}`;
    
    let random = Math.floor(Math.random() * 3);
    let randColor = btns[random];
    let RanBtn = document.querySelector(`.${randColor}`);
    btnflash(RanBtn);
}