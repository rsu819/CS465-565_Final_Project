var express = require('express');
const fetch = require("node-fetch");
var router = express.Router();

const WEATHER_KEY = process.env.WEATHER_KEY;
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?';

router.get('/:zip', async function (req, res) {
  const zip = req.params.zip;
  try {
    const response = await fetch(`${apiUrl}zip=${zip}&appid=${WEATHER_KEY}`);
    const json = await response.json();
    // console.log(json.list);
    let obj = {
      data: []
    };
    json.list.forEach(x => {
      obj.data.push(
        {
          date: x.dt_txt.slice(0, 10),
          time: x.dt_txt.slice(-8),
          weather: x.weather,
          main: x.main
        }
      )
    })

    res.status(200).send(obj);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;