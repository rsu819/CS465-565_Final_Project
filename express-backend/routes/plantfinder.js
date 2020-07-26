var express = require('express');
var router = express.Router();

//var findCtlr = require('../controllers/finder');

router.get('/', function(req, res) {
    res.send('PLANT FINDER PAGE');
});


module.exports = router;
