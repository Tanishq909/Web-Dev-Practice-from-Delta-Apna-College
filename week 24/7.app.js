let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector('input');

btn.addEventListener('click',function() {
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);

    let delBtn = document.createElement('button');
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    console.log(inp.value);
    inp.value = "";
})

//Case of bubbling
ul.addEventListener('click',function(event) {
    if (event.target.tagName == "BUTTON") {
        console.log("deleted");
        let itemList = event.target.parentElement;
        itemList.remove();
    }
    else {
        console.log("not deleted");
    }
})


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener('click',function() {
//         console.log("deleted");
//         let par = this.parentElement;
//         par.remove();
//     })
// }