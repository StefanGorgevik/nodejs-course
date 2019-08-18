const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//const hbs = require("express-handlebars");

const app = express();

//app.engine("hbs", hbs({layoutsDir: "views/layouts/", defaultLayout: "main-layout", extname: "hbs"}));
app.set("view engine", "ejs");
app.set("views", "views");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin",adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
    res.status(404).render("404", {pageTitle: "Page Not Found"});
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