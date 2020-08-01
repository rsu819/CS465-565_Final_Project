var express = require("express");
var router = express.Router();

//var trefle = require('../api/trefle');

var jwt = "";

// router.use(function getAuth(req, res, next) {
//     trefle.getAuth().then(response => {
//         jwt = response.token;
//         next()});
// }, function (req, res) {
//     trefle.requestAll(jwt).then(data => res.send(data));
// });

// router.use(function getAuth(req, res, next) {
//     trefle.getAuth().then(response => {
//         jwt = response.token;
//         res.sendStatus(200)});
// });



module.exports = router;
