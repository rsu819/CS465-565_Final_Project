var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();

const WEATHER_KEY = process.env.WEATHER_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

router.get('/:zip', async function (req, res) {
  const zip = req.params.zip;
  try {
    const response = await fetch(`${apiUrl}zip=${zip}&appid=${WEATHER_KEY}`);
    let json = await response.json();
    if (!json.hasOwnProperty('message')) {
      json.message = 'valid';
    }

    res.status(200).send(json);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;