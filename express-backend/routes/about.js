var express = require('express');
var router = express.Router();

var aboutCtlr = require('../controllers/about');

exports.aboutUs = router.get('/', aboutCtlr.about);
