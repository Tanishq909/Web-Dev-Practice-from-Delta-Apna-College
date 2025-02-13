let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"]

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

//keypress ----> game start
document.addEventListener("keypress",function() {
    if(started == false) {
        console.log("game is started");
        started = true;
    }
    levelUp();
})

//Flash buttons
function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function() {
        btn.classList.remove('flash');
    },300);
}

function userflash(btn) {
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    },300);
}

//Levelup 
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp(),1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;  
        reset();
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(document.querySelector('body').style.backgroundColor = "white",1000);
    }
}

function keyPress() {
    console.log(this);
    userflash(this);

    userColor = this.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll('.btn');
for(btn of allBtns) {
    btn.addEventListener('click',keyPress)
}

//Reset
function reset() {
    let started = false;
let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"]
let level = 0;
}