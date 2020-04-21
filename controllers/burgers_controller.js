const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.getAll(function (data) {
    let allBurgers = {
      burgers: data,
    };
    res.render("index", allBurgers);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.createBurger(req.body.name, function (result) {
    console.log(result);
    res.end();
  });
});

router.put("/api/burgers/:id", function (req, res) {
  console.log(req.body);
  burger.devourBurger(req.params.id, req.body.devoured, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  burger.deleteBurger(req.params.id, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.end();
    }
  });
});

module.exports = router;
