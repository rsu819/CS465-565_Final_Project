var express = require('express');
var router = express.Router();

var aboutController = require('../controllers/about');

router.get('/', aboutController.aboutUs);
