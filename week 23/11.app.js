let btn = document.querySelector('button');

// btn.addEventListener('click',function(event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick",function(event) {
//     console.log(event);
//     console.log("Double button clicked");
// });

let inp = document.querySelector('input');

// inp.addEventListener('keydown',function(event) {
//     console.log(event);
//     console.log("key was pressed");
// })

// inp.addEventListener('keyup',function(event) {
    // console.log(event);
    // console.log("key = ",event.key);
    // console.log("code = ",event.code);
    // console.log("key was released");
// })

//code and key in keyboard Event
inp.addEventListener("keydown",function(event) {
    console.log("code = ",event.code);  //ArrowUp,ArrowDown,ArrowLeft,ArrowRight
    if(event.code = "ArrowUp") {
        console.log("character moves backward");
    }else if(event.code = "ArrowDown") {
        console.log("character moves backward");
    }else if(event.code = "ArrowLeft") {
        console.log("character moves left");
    }else if(event.code = "ArrowRight") {
        console.log("character moves right");
    }
});
