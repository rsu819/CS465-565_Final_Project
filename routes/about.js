var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", async function (req, res) {
  try {
    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`)
    const json = await response.json();
    //console.log(json);
    res.status(200).send(json);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
