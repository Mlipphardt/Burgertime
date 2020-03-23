const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.getAll(function(data) {
    let allBurgers = {
      burgers: data
    };
    console.log(allBurgers);
    res.render("index", allBurgers);
  });
});

router.post("/api/burgers", function(req, res) {
    burger.createBurger(req.body.name, function(result){
        res.json(result);
    })
});

module.exports = router;