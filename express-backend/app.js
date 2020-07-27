// import modules
<<<<<<< HEAD
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
const { urlencoded } = require('express');

const trefle = require('./api/trefle');
const weather = require('./api/weather');

// import router paths
var indexRouter = require("./routes/index");
var searchRouter = require("./routes/search");
var plantRouter = require("./routes/plants");
var findRouter = require("./routes/plantfinder");
var weatherRouter = require("./routes/weather");
var aboutRouter = require("./routes/about");

=======
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
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

>>>>>>> Robin

// create express app object
const app = express();

app.use(cors());
// call middleware functions for each requested path
<<<<<<< HEAD
app.use("/", indexRouter);
app.use("/search", searchRouter);
app.use("/plants", plantRouter);
app.use("/plantfinder", findRouter);
app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);
=======
app.use('/', indexRouter);
app.use('/search', searchRouter);
app.use('/plants', plantRouter);
app.use('/plantfinder', findRouter);
app.use('/weather', weatherRouter);
app.use('/about', aboutRouter);

>>>>>>> Robin

// middleware functions
// parsing urlencoded payloads
app.use(logger("dev"));
app.use(express.json());
<<<<<<< HEAD
app.use(urlencoded({ extended: false }));
=======
app.use(urlencoded({extended: false}));
>>>>>>> Robin

// if 404 error
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
<<<<<<< HEAD
=======
>>>>>>> Robin
