const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(rootDir, "views", "main.html"))
})

module.exports = router;
