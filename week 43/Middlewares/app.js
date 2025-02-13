const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middleware -> response send 
const checkToken = (req,res,next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

//Error
app.get("/wrong",(req,res) => {
    abcd = abcd;
});

app.get("/api",checkToken,(req,res,next) => {
    res.send("data");
});

app.use("/random",(req,res,next) => {
    console.log("I am only for random");
    next();
});

// logger == morgon
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname , req.path , req.time);
//     next();
// })
// app.use((req,res,next) => {
//     let {query} = req.query;
//     console.log(query);
//     console.log("Hi, I am 1st middleware");
//     res.send("middleware finished");
//     next();
// });

// app.use((req,res,next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });

app.get("/",(req,res) => {
    res.send("Hi, I am root");
});

app.get("/random",(req,res) => {
    res.send("this is a random page");
});

app.use("/err",(req,res) => {
    abcd = abcd;
});

//Activity
app.get("/admin",(req,res) => {
    throw new ExpressError(403,"Access to admin is Forbidden");
})

//Error Handling Middleware
app.use((err,req,res,next) => {
    let { status =500 ,message = "Some Error Occured"} = err;
    res.status(status).send(message);
    // console.log(err);
    // console.log("-----ERROR-----");
    // res.send(err);
    // next(err);
});

// app.use((err,req,res,next) => {
//     console.log("-----ERROR2 Middleware-----");
//     next(err);
// });


// 404 - Error Handling Middleware
app.use((req,res) => {
    res.status(404).send("Page not found!");
});

app.listen(8080,() => {
    console.log("server listening to port 8080");
});


