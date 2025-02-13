console.log(window);
console.dir(document);
console.dir(document.all);
console.dir(document.all[7]);
console.dir(document.all[7].innerText = "Peter Parker");
console.dir(document.all[7].innerText = "Ironman");

//Selecting Element by ID
console.log(document.getElementById("mainImg"));

let imgObj = document.getElementById("mainImg")
console.log(imgObj);
console.dir(imgObj);
console.log(imgObj.src);
console.log(imgObj.tagName);
console.log(imgObj.id);
console.log(imgObj.src = "creation_1.jpg");

console.log(document.getElementById("description"));
console.dir(document.getElementById("description"));
console.log(document.getElementById("abcd"));
console.dir(document.getElementById("abcd"));         //null

//Selecting Element by Class Name
console.log(document.getElementsByClassName("oldImg"));
console.dir(document.getElementsByClassName("oldImg"));
let smallImages = document.getElementsByClassName("oldImg");

for (let i = 0; i<smallImages.length ;i++) {
    smallImages[i].src = "spiderman_img.png";
    console.log(`value of image no. ${i} is changed.`);
}
console.log(document.getElementsByClassName("abcd"));   //empty array

//Selecting Element by Tag Name
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("p")[1]);
console.log(document.getElementsByTagName("span"));

//Query Selectors
console.log(document.querySelector('p'));                   //Selects first p element
console.log(document.querySelector('#description'));        //Selects first element with id = description
console.log(document.querySelector('.oldImg'));             //Selects first element with class = myClass
console.log(document.querySelectorAll("p"));                //Selects all p elements
console.log(document.querySelectorAll("div a"));            //Selects all a elements inside div block

//Using Properties & Methods
let para = document.querySelector("p");
console.dir(para);
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);
console.log(para.innerText = "abc");
console.log(para.innerText = "Hi , I am Peter Parker");
console.log(para.innerText  = "Hi , I am <b>Peter Parker</b>");
console.log(para.innerHTML = "Hi , I am <b>Peter Parker</b>");

let heading = document.querySelector('h1');
console.log(heading.innerHTML = "<u>Spider Man</u>");
console.log(heading.innerHTML = `<u>${heading.innerText}</u>`);

//Manipulating Attributes(getters and setters)
let img = document.querySelector('img');
console.log(img.getAttribute('id'));
console.log(img.setAttribute('id','spidermanImg'));
console.log(img.setAttribute('src',"creation_3.jpg"));
console.log(img.getAttribute('class'));
console.log(img.setAttribute('class',"images"));
console.log(img.getAttribute('class'));

//Manipulating Style   inline styling hoti hai  ismai CSS wali style dekayi nahi deti
img = document.querySelector('img');
console.dir(img);
console.log(img.style);
heading = document.querySelector('h1');
console.log(heading.style.color = 'purple');
console.log(heading.style.color = 'green');
console.log(heading.style.backgroundColor= 'yellow');

let links = document.querySelector('.box a')

for(let i = 0; i<links.length ; i++) {
    links[i].style.color = "purple";
}

// for(link of links) {
//     link.style.color = "purple";
// }

// using classList 
heading = document.querySelector('h1');
console.log(heading.classList);
console.log(heading.classList.add("abc"));
console.log(heading.classList);
console.log(heading.classList.add("green"));
console.log(heading.classList.add("underline"));
console.log(heading.classList.remove("green"));
console.log(heading.setAttribute('class','green'));     //it removes all other classes so we don't use it

console.log(heading.classList.contains("underline"));   //false(not contain class "underline")
console.log(heading.classList.contains("green"));       //true(contain class "green")

console.log(heading.classList.toggle("green"));         //false("green" tha ab remove ho gaya)
console.log(heading.classList.toggle("underline"));     //true("underline" nahi tha toh add ho gaya)

console.log(heading.classList);

let box = document.querySelector(".box");
console.log(box.classList);
console.log(box.classList.add("yellowBg"));
console.log(box.classList);

//Navigation
let h4 = document.querySelector('h4');
console.log(h4.parentElement);
box = document.querySelector('.box');
console.log(box.children);
console.log(box.childElementCount);
let ul = document.querySelector('ul');
console.log(ul.parentElement);
console.log(ul.childElementCount);
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[2].previousElementSibling);
console.log(ul.children[1].nextElementSibling);

img = document.querySelector('img');
console.log(img.previousElementSibling.style.color = "red");

//Creating Elements
let newP = document.createElement('p');
console.dir(newP);
console.log(newP.innerText="Hi , I am a new p");
console.dir(newP);
let body = document.querySelector('body');
// console.log(body.appendChild(newP));

box = document.querySelector('.box');
console.log(box.appendChild(newP));

//Adding button
let btn = document.createElement('button');
console.dir(btn);
console.log(box.appendChild(btn));
btn.innerText = "click me";

newP.append("this is new text");
newP.append(btn);
newP.append("do not click this button");

//ADDING NEW Button
btn = document.createElement('button');
btn.innerText = "NEW BUTTON!!!";
let p = document.querySelector('p');
console.log(btn);
console.log(p);
console.log(p.insertAdjacentElement('beforebegin',btn));

console.log(p.insertAdjacentElement('afterbegin',btn));

console.log(p.insertAdjacentElement('beforeend',btn));

console.log(p.insertAdjacentElement('afterend',btn));

//Removing Elements
body = document.querySelector('body');
console.log(body.removeChild(btn));
console.log(btn.remove());