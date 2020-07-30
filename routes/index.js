var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    //add logic for acquiring JWT here?
    res.redirect('./home');
});

module.exports = router;