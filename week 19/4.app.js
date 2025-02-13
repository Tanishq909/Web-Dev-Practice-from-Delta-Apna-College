//Functions with Arguments Example 1
function printInfo( name , age ) {
    console.log(`${name}'s age is ${age}`);
}
printInfo("Tanishq" , 17);
printInfo("Jethal",40);
printInfo("Aatma");
printInfo(14);

//Functions with Arguments Example 2
function sum(a,b) {
    console.log(a+b);
}
sum(1,3);
sum(4,6);
sum(12,668);
sum(12468,845767);

//AMSWER 3
function calcAvg(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(a,b,c);
    console.log(avg);
}
calcAvg(15,35,55);
calcAvg(5);

//ANSWER 4
function printTable(n) {
    for (let i=0 ; i<=10 ; i++){
        console.log(n * i);
    }
}
printTable(7);

