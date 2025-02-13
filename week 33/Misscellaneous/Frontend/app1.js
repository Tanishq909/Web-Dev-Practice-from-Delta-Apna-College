//Factory Function
// function PersonMaker (name,age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`Hi , my name is ${this.name}`);
//         }
//     }
//     return person;
// }

// let p1 = PersonMaker("adam",25);
// console.log(p1);
// console.log(p1.talk());


// let p2 = PersonMaker("eve",27);
// console.log(p2);
// console.log(p2.talk());

// console.log(p1.talk === p2.talk)

//New operator - 
//Using Constructor - doesn't return anything & start with capital
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.talk = function() {
//     console.log(`Hi,my name is ${this.name}`);
// }

// let p1 = new Person("adam",25);
// console.log(p1);

// let p2 = new Person("eve",25);
// console.log(p2);

// console.log(p1.talk === p2.talk);


//Classes
// class Person{
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi,my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam",25);
// console.log(p1);

// let p2 = new Person("eve",25);
// console.log(p2);

// console.log(p1.talk === p2.talk);