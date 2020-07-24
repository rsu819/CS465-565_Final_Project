var express = require('express');
var router = express.Router();

var searchCtlr = require('../controllers/index');

router.get('/', searchCtlr.search);

module.exports = router;