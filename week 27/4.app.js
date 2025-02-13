let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";


btn.addEventListener('click',async () => {
    let link = await getImage();
    // console.log(link);
    let img = document.querySelector("#result");
    img.setAttribute("src", link);
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e) {
        console.log("error - ",e);
        return "No image found";
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