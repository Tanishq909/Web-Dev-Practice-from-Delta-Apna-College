let form = document.querySelector('form');

form.addEventListener('submit',function(event) {
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener('change',function(event) {
    console.log("input changed");
    console.log("final value =",user.value);
})

user.addEventListener('input',function(event) {
    console.log("input changed");
    console.log("final value =",user.value);
})

