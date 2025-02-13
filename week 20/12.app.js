const student = {
    name : "aman" ,
    marks : 95  ,
    prop : this ,      //global scope
    getName : function() {
        console.log(this);  //student
        return this.name;
    },
    getMarks : () => {
        console.log(this);
        return this.name;  //parent'scope ---> window
    },
    getInfo1 : function() {
        setTimeout( () => {
            console.log(this);       //student
        } , 2000);
    },
    getInfo2 : function() {
        setTimeout( function() {
            console.log(this);        //window
        } , 2000);
    }
};
console.log(student.name);
console.log(student.marks);
console.log(student.prop);
console.log(student.getName);
console.log(student.getMarks);
console.log(student.getInfo1);
console.log(student.getInfo2);