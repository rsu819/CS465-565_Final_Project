// import modules
var createError = require('http-errors');
var express = require('express');
const path = require('path');
const logger = require('morgan');
const { urlencoded } = require('express');

const trefle = require('./api/trefle');
const weather = require('./api/weather');

// import router paths
let indexRouter = require('./routes/index');
let searchRouter = require('./routes/search');
let plantRouter = require('./routes/plants');
let findRouter = require('./routes/plantfinder');
let weatherRouter = require('./routes/weather');
let aboutRouter = require('./routes/about');


// create express app object
var app = express();

// call middleware functions for each requested path
app.use('/index', indexRouter);
app.use('/search', searchRouter);
app.use('/plants', plantRouter);
app.use('/plantfinder', findRouter);
app.use('/weather', weatherRouter);
app.use('/about', aboutRouter);


// middleware functions
// parsing urlencoded payloads
app.use(logger('dev'));
app.use(express.json());
app.use(urlencoded({extended: false}));

// if 404 error
app.use(function(req, res, next) {
    next(createError(404));
});

let jwt = "";
trefle.getAuth().then(response => (app.set('jwt', response.token)));
console.log(jwt);
module.exports = app;


