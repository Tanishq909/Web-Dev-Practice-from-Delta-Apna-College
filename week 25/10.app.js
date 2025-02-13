h1 = document.querySelector('h1');

function changeColor(color,delay,nextchangeColor) {
    setTimeout(() => {
        h1.style.color = color;
        if(nextchangeColor) nextchangeColor();
    },delay)
}

//callback nesting ----> callback Hell

changeColor("red",1000,()=>{
    changeColor("orange",1000,()=> {
        changeColor("green",1000,()=> {
            changeColor("yellow",1000,()=>{
                changeColor("blue",1000,()=>{
                });
            });
        });
    });
});


// setTimeout(() => {
//     h1.style.color = "red";
// },1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// },2000);

// setTimeout(() => {
//     h1.style.color = "green";
// },3000);