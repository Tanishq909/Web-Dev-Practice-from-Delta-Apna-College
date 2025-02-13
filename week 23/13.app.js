//Form Events for form

let form = document.querySelector('form');

// form.addEventListener('submit',function(event) {
//     event.preventDefault();  //To stop the submittion link opening
//     alert("form submitted");
// })

//Extracting Form Data
form.addEventListener('submit',function(event) {
    // event.preventDefault();
    
let user = this.events[0];   //form.elements[0]    // document.querySelector("#user");
let pass = this.events[1];   //form.elements[0]    // document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is sey to ${user.value}`);
})
