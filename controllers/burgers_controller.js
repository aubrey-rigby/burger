const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        
        toEatData = data.filter(burger => burger.devoured === 0)
        eatenData = data.filter(burger => burger.devoured === 1)

      res.render("index", { toEat: toEatData, eaten: eatenData });
    });
  });
  
  module.exports = router;