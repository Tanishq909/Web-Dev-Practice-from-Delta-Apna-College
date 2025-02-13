//Switch statements (Used when we have some fixed values that we need to compare to.)
// break; is uesd in switch statements.
    color = 'red';
    switch (color) {
        case "red" : 
            console.log("stop");
            break;
        case "yellow" : 
            console.log("slow down");
            break;
        case "green" : 
            console.log("Go");
            break;
        default : 
            console.log("Broken Light");
    }

//Practice Q5:- Use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// 1 = Monday , 2 = Tuesday & so on....
    let day = 5;
    switch (day) {             
        case 1 :
            console.log("Monday");
            break;
        case 2 :
            console.log("Tuesday");
            break;
        case 3 :
            console.log("Wednesday");
            break;
        case 4 :
            console.log("Thursday");
            break;
        case 5 :
            console.log("Friday");
            break;
        case 6 :
            console.log("Saturday");
            break;
        case 7 :
            console.log("Sunday , fun day ");
            break;
        default :
            console.log("No day found");
    }
