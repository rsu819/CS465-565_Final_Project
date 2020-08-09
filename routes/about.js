var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

<<<<<<< HEAD
// router.get("/", function (req, res, next) {
//   fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`)
//     .then((res) => res.json())
//     .then((data) => {
//       //console.log(data);
//       res.send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return res.data;
// });

router.get("/", async function (req, res, next) {
  let response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`);
  if (response.ok) {
    let json = await response.json();
    res.send(json);
  } else {
    alert("HTTP-Error: " + response.status);
=======
router.get("/", async function (req, res) {
  try {
    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`)
    const json = await response.json();
    //console.log(json);
    res.status(200).send(json);
  } catch (err) {
    res.status(400).send(err);
>>>>>>> 8406053aa25db6df32d6e895464af8bd351684d2
  }
});

module.exports = router;
