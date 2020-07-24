var express = require('express');
var router = express.Router();

var plantCtlr = require('../controllers/plants');

router.get('/', function(req, res) {
    res.redirect('/plantfinder');
  });

router.get('/:slug', plantCtlr.plantBio);

module.exports = router;
