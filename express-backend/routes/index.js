var express = require('express');
var router = express.Router();

var searchCtlr = require('../controllers/index');

router.get('/', function (req, res) {
    res.redirect('/search');
});


module.exports = router;