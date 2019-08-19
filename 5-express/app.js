const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const pageNotFound = require("./controllers/page-not-found");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(pageNotFound.get404);

app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully!");
})
               