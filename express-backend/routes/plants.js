var express = require('express');
var router = express.Router();

var plantCtlr = require('../controllers/plants');

router.get('/', function(req, res) {
    res.redirect('/plantfinder');
  });

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.params.slug);
});

module.exports = router;
