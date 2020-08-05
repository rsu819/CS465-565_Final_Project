if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
let express = require('express');
let router = express.Router();

let lat = 45.5051;
let lon = 122.6750;
let part = ['current', 'minutely', 'hourly'];
let apiWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&
exclude=${part}&appid=${process.env.OW_KEY}`;

router.get('/', function(req,res) {
    console.log('weather');
    res.send({'body': 'THIS PAGE CONTAINS WEATHER INFO'});
});

module.exports = router;