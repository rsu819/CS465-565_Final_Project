const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

//const token = ${{ secrets.TREFLETOKEN }};
const token = process.env.TREFLE_KEY;

//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim';
let plant = '/api/v1/plants/search?q=';

const authParams = {
    origin: 'https://plantsplantsplants.herokuapp.com/',
    token: token
};


router.get('/', function(req, res) {
  fetch(`http://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_KEY}&q=basil`)
    .then((response) => {res.send(response)})
    // .then((data) => res.send(data))
    .catch((err) => console.log(err));
 
});

// get JWT auth token
exports.getAuth = async function() {
  const response = await fetch(
    url+auth, {
      method: 'post',
      body: JSON.stringify(authParams),
      headers: { 'Content-Type': 'application/json' }
    });
  const json = await response.json();
  return json;
  };

module.exports = router;
