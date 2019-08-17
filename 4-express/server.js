const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully!");
})
                // // app.use((req, res, next) => {
                // //     console.log("In the middleware!");
                // //     next(); //allows the req to continue to the next middleware in line
                // // });
                
                // app.use("/", (req, res, next) => {
                //     //console.log("This will always run!!");
                //     next();
                // });