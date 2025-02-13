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

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns) {
    delBtn.addEventListener('click',function() {
        console.log("deleted");
        let par = this.parentElement;
        par.remove();
    })
}