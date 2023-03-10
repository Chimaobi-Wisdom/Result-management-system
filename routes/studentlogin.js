var express = require("express");
const router = express.Router();
const Student = require("../models/Students");

router.get("/login", (req, res) => {
  res.render("student/login");
});
router.post("/login", async (req, res) => {

    const Stuname = req.body.name;


    const individualStudent = await Student.findOne({name : Stuname});
    if(!individualStudent){
      res.render("student/login", {
        error : "Login with correct Name"
      })
    };

    const password = req.body.pass;

    const individualPassword = await Student.findOne({pass: password});
    if(!individualPassword){
      res.render("student/login", {
        error: "Incorrect Password"
      })
    }
    res.render("student/view", { one : individualStudent});
});

module.exports = router;
