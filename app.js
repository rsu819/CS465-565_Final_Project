// import modules
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
const { urlencoded } = require("express");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}


// import router paths
let indexRouter = require("./routes/index");
let homeRouter = require("./routes/home");
let plantRouter = require("./routes/plants");
let findRouter = require("./routes/finder");
let weatherRouter = require("./routes/weather");
let aboutRouter = require("./routes/about");
let authRouter = require("./routes/auth");

// create express app object
const app = express();

const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:4000";
app.use(cors({
  origin: `${baseUrl}`,
  credentials: true,
}));

// call middleware functions for each requested path
app.use("/", indexRouter);
app.use("/home", homeRouter);
app.use("/plants", plantRouter);
app.use("/finder", findRouter);
app.use("/weather", weatherRouter);
app.use("/about", aboutRouter);
app.use("/auth", authRouter);


// middleware functions
// parsing urlencoded payloads
app.use(logger("dev"));
app.use(express.json());
app.use(urlencoded({ extended: false }));


if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, "react-frontend", "build")));

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'react-frontend', 'build', 'index.html'));
  });
}

// if 404 error
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
