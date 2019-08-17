const express = require("express");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/users");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.use("/", adminRoutes);
app.use(userRoutes);

app.listen(3000, (err) => {
    if(err) return console.log(err);
    return console.log("Server has started successfully!");
});