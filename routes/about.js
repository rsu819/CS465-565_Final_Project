var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", function (req, res, next) {
  fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then((data) => {
      //console.log(data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  return res.data;
});

module.exports = router;
