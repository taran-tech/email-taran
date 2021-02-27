const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');

router.get("/", (req, res)=> {
    res.render("general/home", {
        title: "HOme page"
    })
});

router.get("/contact-us", (req, res)=>{
    res.render("general/contactUs", {
        title: "contact us"
    })
});
router.post("/contact-us", (req, res) =>{
    console.log(req.body);

    let validationResults = {};
    let passedValidation = true;
    const{firstName, lastName, eamil, message}  = req.body;

    if (typeof firstName !== "string" || firstName.length === 0 ){
        validationResults.firstName = "you must specify a first name."
        passedValidation = false;
    }
    else if (firstName.length < 2){
        validationResults.firstName ="The first name must be at least 2 character";
        passedValidation= false;
    }

    if(passedValidation){
        res.send("suceess");
    }
    else{
    res.render("general/contactUs", {
        title: "contact us",
        validationResults: validationResults,
        values: req.body
     })
    };
    
})
module.exports = router;