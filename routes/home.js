const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim';
let listPlants = '/api/v1/plants?token=';
let plant = '/api/v1/plants/search?q=';

// API token
//const token = ${{ secrets.TREFLETOKEN }};
const token = 'N01xNVBYZGd6ZjlHeldTTmduUGJEdz09';
const authParams = {
    origin: 'https://plantsplantsplants.herokuapp.com/',
    token: token
};

// get JWT auth token
let getAuth = async function() {
  let response = await fetch(
    url+auth, {
      method: 'post',
      body: JSON.stringify(authParams),
      headers: { 'Content-Type': 'application/json' }
    });
  let json = await response.json();
  console.log(json);
  return json;
  };

// list all plants (paginated)
let requestAll = async function(jwt) {
    let response = await fetch(url+listPlants+jwt);
    let json = await response.json();
    return json;
  };

// router.get('/home', function(req, res) {
//     res.sendFile('/index.html', {root: 'react-frontend/public'});
// });

router.get( '/search', async function(req, res, next) {
    let jwt = await getAuth();
    next(jwt);
}, async function(req, res) {
    let response = await fetch( 
        url+plant+`${req.keyword}`+`token=${jwt}`);
    let json  = await response.json();
    res.send(json);
});


router.get( async function(req, res) {
    let authenticated = await getAuth();
    jwt = authenticated.token;
    res.sendStatus(200);
    console.log(jwt);
})


module.exports = router;