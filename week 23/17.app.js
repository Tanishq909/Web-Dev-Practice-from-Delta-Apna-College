let inp = document.querySelector('input');
let p = document.querySelector('p');

inp.addEventListener('input',function(event) {
    console.log(this.value);   //inp.value
    p.innerText = this.value;
})

