const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);
app.use(shopRoutes);

// // app.use((req, res, next) => {
// //     console.log("In the middleware!");
// //     next(); //allows the req to continue to the next middleware in line
// // });

// app.use("/", (req, res, next) => {
//     //console.log("This will always run!!");
//     next();
// });


app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully!");
})