var express = require('express');
var router = express.Router();

var aboutCtlr = require('../controllers/about');

router.get('/', aboutCtlr.about);

module.exports = router;