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

module.exports = router;