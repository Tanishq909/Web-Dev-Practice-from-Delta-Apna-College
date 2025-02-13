let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener('click',async () => {
    let state = document.querySelector('input').value;
    console.log(state);
    let colArr = await getCollege(state);
    console.log(colArr);
    show(colArr);
})

function show(colArr) { 
    let list = document.querySelector('#list')
    for(col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li)
    }
}

async function getCollege(state) {
    try {
        let res = await axios.get(url + state);
        return res.data;
    }
    catch(error) {
        console.log("error :", error);
        return [];
    }
}
