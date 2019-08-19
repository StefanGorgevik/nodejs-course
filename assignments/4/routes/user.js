const path = require("path");
const express = require("express");
const rootDir = require("../util/path")
const router = express.Router();
const adminData = require("./admin");

router.get("/users", (req, res) => {
    const users = adminData.users;
    res.render("user",{
        users: users,
        pageTitle: "User",
        path: "/users"
    });
});


exports.routes = router;