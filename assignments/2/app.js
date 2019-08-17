const express = require("express");
const app = express();

app.use("/users",(req, res, next) => {
    console.log("/users middleware");
    res.send("<h1>The middleware that handles just /users </h1>")
});

app.use("/",(req, res, next) => {
    console.log("/middleware");
    res.send("<h1>The middleware that handles just / </h1>")
});

app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully!");
    
})