var express = require('express');
var router = express.Router();

var aboutCtlr = require('../controllers/about');

router.get('/', function(req, res) {
    res.send('ABOUT PAGE');
});

module.exports = router;