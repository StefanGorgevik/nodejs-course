const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
    //console.log("The add-product page!");
    //res.send(`<form action="/admin/add-product" method="POST"><input name="title" type="text"><button type"submit">Add product!</button></form>`);
    res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});


module.exports = router;