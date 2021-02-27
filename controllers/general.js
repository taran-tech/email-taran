const express = require("express");
const router = express.Router();

router.get("/", (req, res)=> {
    res.render("general/home", {
        title: "HOme page"
    })
});
module.exports = router;