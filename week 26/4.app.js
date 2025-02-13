//Await Keyword
// function getNam() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1 ;
//             return num; 
//             resolve();
//         },1000)
//     })
// }

// async function demo() {
//     await getNam();
//     await getNam();
//     await getNam();
// }

// console.log(demo());

//Color Change
let h1 = document.querySelector('h1');

function changeColor(color,delay) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color changed to ${color}`)
            resolve("color changed")
        },delay)
    })
}

async function demo1() {
    await changeColor("red",1000);
    await changeColor("orange",1000);
    await changeColor("green",1000);
    await changeColor("blue",1000);
}

console.log(demo1());