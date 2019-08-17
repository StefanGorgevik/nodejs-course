const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
    //console.log("The add-product page!");
    res.send(`<form action="/product" method="POST"><input name="title" type="text"><button type"submit">Add product!</button></form>`);
});

router.post("/product", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});


module.exports = router;