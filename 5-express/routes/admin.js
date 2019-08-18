const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
    //console.log("The add-product page!");
    //res.send(`<form action="/admin/add-product" method="POST"><input name="title" type="text"><button type"submit">Add product!</button></form>`);
    //res.sendFile(path.join(rootDir, "views", "add-product.html"));
    res.render("add-product", {
        pageTitle: "Add Product", 
        path: "/admin/add-product", 
        formsCSS: true, 
        productCSS: true, 
        activeAddProduct: true })
});

router.post("/add-product", (req, res) => {
    products.push({ title: req.body.title });
    res.redirect("/");
});

exports.routes = router;
exports.products = products;