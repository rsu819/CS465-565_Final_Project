var express = require('express');
var router = express.Router();

var weatherCtlr = require('../controllers/weather');

router.get('/', weatherCtlr.weather);

module.exports = router;