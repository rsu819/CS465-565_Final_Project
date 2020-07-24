var express = require('express');
var router = express.Router();

var searchCtlr = require('../controllers/search');

// redirect search to index page
router.get('/', function(req, res) {
  res.redirect('/index');
});

router.get('/results', searchCtlr.results);

module.exports = router;