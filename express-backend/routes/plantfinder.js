var express = require('express');
var router = express.Router();

var findCtlr = require('../controllers/finder');

router.get('/', findCtlr.finder);

module.exports = router;
