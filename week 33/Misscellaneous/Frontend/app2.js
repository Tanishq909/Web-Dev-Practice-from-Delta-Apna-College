class Person {
    constructor(name,age) {
        console.log("person class constructor")
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}


class Student extends Person {
    constructor(name,age,marks) {
        console.log("student class constructor");
        super(name,age);   //parent class constructor is being called
        this.marks = marks;
    }
}

let stu1 = new Student("Adam",25,95);
console.log(stu1);

class Teacher extends Person {
    constructor(name,age,subject) {
        super(name,age);    //parent class constructor is being called
        this.subject = subject;
    }
}

let t1 = new Teacher("eve",25,"english");
console.log(t1);