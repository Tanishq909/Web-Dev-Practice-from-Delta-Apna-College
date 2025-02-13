let btn = document.querySelector("button");

btn.addEventListener('click',async () => {
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";


async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact
    }
    catch(e) {
        console.log("error - ",e);
        return "No fact found";
    }
}

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.facts);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.facts);

//         let res3 = await fetch(url);
//         let data3 = await res3.json();
//         console.log(data3.facts);
//     }
//     catch(e) {
//         console.log("error - ",e);
//     }

//     console.log("bye");
// }