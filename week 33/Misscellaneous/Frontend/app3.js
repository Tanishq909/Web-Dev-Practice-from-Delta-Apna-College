class Mammal {                   //parent or base class
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {  //child class
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("wooff..")
    }
}

class Cat extends Mammal {   //child class
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meow..")
    }
}

let dog1 = new Dog("tuffie");
console.log(dog1);