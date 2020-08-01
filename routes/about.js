var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", function (req, res, next) {
  fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`)
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
