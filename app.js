// import modules
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const { urlencoded } = require("express");


// import router paths
<<<<<<< HEAD
let indexRouter = require("./routes/index");
let searchRouter = require("./routes/search");
let plantRouter = require("./routes/plants");
let findRouter = require("./routes/plantfinder");
let weatherRouter = require("./routes/weather");
let aboutRouter = require("./routes/about");
=======
let indexRouter = require('./routes/index');
let homeRouter = require('./routes/home');
let plantRouter = require('./routes/plants');
let findRouter = require('./routes/finder');
let weatherRouter = require('./routes/weather');
let aboutRouter = require('./routes/about');

>>>>>>> ef6f54f9249d42a09a1a3154c9fc6e0a487c3360

// create express app object
const app = express();

// Serve static files from the React app
console.log(__dirname);
app.use(express.static(path.join(__dirname, "react-frontend/build")));

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
app.use('/home', homeRouter);
app.use('/plants', plantRouter);
app.use('/finder', findRouter);
app.use('/weather', weatherRouter);
app.use('/about', aboutRouter);

>>>>>>> ef6f54f9249d42a09a1a3154c9fc6e0a487c3360

// middleware functions
// parsing urlencoded payloads
app.use(logger("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/react-frontend/build/index.html"));
});

// if 404 error
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
