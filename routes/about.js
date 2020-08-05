var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

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
  }
});

module.exports = router;
