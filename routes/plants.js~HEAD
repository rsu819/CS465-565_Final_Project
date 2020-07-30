var express = require('express');
var router = express.Router();


// router.get('/', function(req, res) {
//     res.redirect('/');
//   });

router.get('/', function(req, res) {
  res.sendFile('/index.html', {root: 'react-frontend/public'});
});

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.params.slug);
});

module.exports = router;
