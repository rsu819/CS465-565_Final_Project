let express = require('express');
let router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/');
  });

// router.get('/results', function(req, res) {

// })

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.params.slug);
});

module.exports = router;
