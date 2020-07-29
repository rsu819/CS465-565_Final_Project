var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('PLANT FINDER PAGE');
});


module.exports = router;
