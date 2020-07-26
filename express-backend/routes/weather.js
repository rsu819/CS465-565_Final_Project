var express = require('express');
var router = express.Router();

var weatherCtlr = require('../controllers/weather');

router.get('/', function(req,res) {
    res.send('THIS PAGE CONTAINS WEATHER INFO');
});

module.exports = router;