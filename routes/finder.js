var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();


// const params = {
//   origin: 'https://plantsplantsplants.herokuapp.com/',
//   token: process.env.TREFLE_KEY
// };


// (async () => {
//   const response = await fetch(
//     'https://trefle.io/api/auth/claim', {
//     method: 'post',
//     body: JSON.stringify(params),
//     headers: { 'Content-Type': 'application/json' }
//   });
//   const json = await response.json();
//   console.log(json);
// })();

// router.get("/", async function (req, res) {
//   try {
//     let response = await fetch(
//       'https://trefle.io/api/auth/claim', {
//       method: 'post',
//       body: JSON.stringify(params),
//       headers: { 'Content-Type': 'application/json' }
//     });
//     console.log(response);
//     res.status(200).send(response);
//   }
//   catch (err) {
//     res.status(404).send(err);
//   }
// });

// router.get("/", async function (req, res) {
//   try {
//     let response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.TREFLE_KEY}`);
//     console.log(response);
//     res.status(200).send(response);
//   }
//   catch (err) {
//     res.status(404).send(error);
//   }
// });

module.exports = router;
