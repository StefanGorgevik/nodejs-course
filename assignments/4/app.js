const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminData = require("./routes/admin");
const userData = require("./routes/user");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/admin", adminData.routes);
app.use(userData.routes);

app.use("*", (req, res) => {
    res.status(404).render("404", {pageTitle: "Page Not Found", path: "*"});
});

app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully");
})