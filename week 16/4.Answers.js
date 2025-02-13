// Ques1- For the given string : let msg = "help!"; Trim it & convert it to uppercase.
//ANSWER 1 :-
        let msg = "help!";
        msg1 = msg.trim().toUpperCase();
        console.log(msg1);

// Ques2- For the String -> let name = "ApnaCollege"; predict the output for following :  <br>
//     a) name.slice(4,9);
//     b) name.indexOf("na");
//     c) name.replace("Apna","Our");
let name = "ApnaCollege";
console.log(name.slice(4,9));               //Colle
console.log(name.indexOf("na"));            //2
console.log(name.replace("Apna","Our"));    //OurCollege


//Ques3- Separate the "College" part in above string & replace 'l' with 't' in it.
console.log(name.slice(4));
console.log(name.replace('l','t')); 
