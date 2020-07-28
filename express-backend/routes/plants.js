var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.redirect('/');
  });

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.params.slug);
});

module.exports = router;
