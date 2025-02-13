const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);
});

app.get("/",(req,res) => {
    res.send("hello , i am root");
})

app.get("/:username/:id",(req,res) => {
    let { username , id} = req.params;
    let htmlStr = `<h1>Welcome to the page of @${username} with id:${id}</h1>`
    res.send(htmlStr);
})

// app.get("/search",(req,res) => {
//     console.log(req.query);
//     res.send("no results");
// })

app.get("/search",(req,res) => {
    let {q} = req.query;
    if (!q) {
        res.send("No search query");
    }
    res.send(`These are the results for: ${q}`);
})
// app.get("/apple",(req,res) => {
//     res.send("you contacted apple path");
// })

// app.get("/orange",(req,res) => {
//     res.send("you contacted orange path");
// })

// app.get("*",(req,res) => {
//     res.send("this page does not exist");
// })

// app.post("/",(req,res) => {
//     res.send("you sent a post request");
// })

// app.use((req,res) => {
//     // res.send("this is a basic response")
//     // res.send({                         //Convert into JSON Format
//     //     name : "apple",
//     //     color : "red",
//     // });
//     console.log("request received");
//     code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>"
//     res.send(code); 
// });