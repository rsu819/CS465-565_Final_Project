// import modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

// import router paths
var aboutRouter = require('./routes/about');
const { urlencoded } = require('express');

// create express app object
var app = express();

// call middleware functions for each requested path
app.use('/about', aboutRouter);

// middleware functions
// parsing urlencoded payloads
app.use(logger('dev'));
app.use(express.urlencoded({extended: false});
)

// if 404 error
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;