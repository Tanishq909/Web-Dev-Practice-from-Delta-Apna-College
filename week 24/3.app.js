let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelector('li');

div.addEventListener("click",function() {
    console.log("div was clicked");
})

ul.addEventListener("click",function(event) {
    event.stopPropagation();                       //To stop event bubbling(nested tags mai andar wale )
    console.log("ul was clicked");
})

for(li of lis) {
    li.addEventListener("click",function(event) {
        event.stopPropagation();
        console.log("li was clicked");
    })
};

