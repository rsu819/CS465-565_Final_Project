var express = require('express');
var router = express.Router();

var trefle = require('../api/trefle');

//var searchCtlr = require('../controllers/search');

var jwt = '';

// router.use(function getAuth(req, res, next) {
//     trefle.getAuth().then(response => {
//         jwt = response.token;
//         next()});
// }, function (req, res) {
//     trefle.requestAll(jwt).then(data => res.send(data));
// });

router.use(function getAuth(req, res, next) {
    trefle.getAuth().then(response => {
        jwt = response.token;
        next()});
}, function(req, res) {
    res.send(jwt);
});

//router.get('/', searchCtlr.getJWT);

module.exports = router;