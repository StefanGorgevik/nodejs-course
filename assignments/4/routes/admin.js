const path = require("path");
const express = require("express");
const router = express.Router();
const rootPath = require("../util/path");

const users = [];

router.get("/add-user", (req,res) => {
    res.render("form", {
        pageTitle: "Add User",
        path: "/admin/add-user"
    });
})

router.post("/add-user", (req, res) => {
    users.push({ name: req.body.name });
    res.redirect("/users");
})

exports.routes = router;
exports.users = users;