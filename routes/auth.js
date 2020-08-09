var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

const params = {
  origin: 'http://localhost:4000',
  token: process.env.TREFLE_KEY,
}
const apiUrl = "https://trefle.io/api/auth/claim";

router.get("/", async function (req, res) {
  try {
    const response = await fetch(
      apiUrl, {
      method: 'POST',
      body: JSON.stringify(params),
      headers: { 'Content-Type': 'application/json' }
    });
    const json = await response.json();
    // console.log(json);
    res.status(200).send(json);
  } catch (err) {
    console.error(err);
    res.status(400).send({ error, message: error.message });
  }
})


module.exports = router;
