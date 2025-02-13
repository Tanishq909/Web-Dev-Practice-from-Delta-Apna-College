const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended : true }));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
  
// Create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1', // Use IPv4 localhost
  user: 'root',
  database: 'delta_app',
  password: 'tanishq2334'
});



let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

//Inserting New Data
let q = "INSERT INTO user (id,username,email,password) VALUES ?";

let data = [];
for(let i = 1;i <= 100;i++) {
  data.push(getRandomUser());   //100 fake data people
};

// let users = [
//   ["123b","123_newiserb","abc@gmail.comb","abcb"],
//   ["123c","123_newiserc","abc@gmail.comc","abcc"]
// ];

//Home Page
app.get("/",(req,res) => {
  let q = `SELECT count(*) FROM user`;
    try {
      connection.query(q,(err,result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      console.log(result[0]["count(*)"]);
      res.render("home.ejs",{ count });
      });
    }
    catch(err) {
      console.log(err);
      res.send("Some error in DB");
    }
});

//Show Route
app.get("/user",(req,res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q,(err,users) => {
    if (err) throw err;
    // console.log(result);
    // res.send(users);
    res.render("showusers.ejs", { users });
    });
  }
  catch(err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

//Edit Route
app.get("/user/:id/edit",(req,res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q,(err,result) => {
    if (err) throw err;
    let user = result[0];
    res.render("edit.ejs", { user });
    });
  }
  catch(err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

//UPDATE (DB) Route
app.patch("/user/:id",(req,res) => {
  let { id } = req.params; 
  let {password: formPass , username : newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q,(err,result) => {
    if (err) throw err;
    let user = result[0];
    if (formPass != user.password) {
      res.send("WRONG password");
    }
    else{
      let q2 = `UPDATE user SET username='${newUsername}' WHERE id = '${id}'`;
      connection.query(q2,(err,result) => {
        if (err) throw err;
        res.redirect("/user");
      })
    }
    });
  }
  catch(err) {
    console.log(err);
    res.send("Some error in DB");
  }
});


app.listen("8080",() => {
  console.log("server is listening to our port 8080");
});
























// try {
//   connection.query(q,[data],(err,result) => {
//   if (err) throw err;
//   console.log(result);
//   // console.log(result.length);
//   // console.log(result[0]);
//   // console.log(result[1]);
//   });
// }
// catch(err) {
//   console.log(err);
// }


// connection.end();  //To close the connection
