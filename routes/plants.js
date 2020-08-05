if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
let express = require('express');
let router = express.Router();
let fetch = require('node-fetch'); 
const { response } = require('express');
const app = require('../app');
const { nextTick } = require('async');
//base URL
let url = 'https://trefle.io';

// URL endpoints
//let auth = '/api/auth/claim';
let plant = `/api/v1/plants/search?q=`;
let id = `/api/v1/plants/`;

// get information for selected plant
router.get('/:slug/:id', function(req, res) {
    let query = req.params.id;
    console.log('Search id: ' + query);
    fetch(url+id+query+`?token=${process.env.TREFLE_KEY}`, { 
        //fetch('http://swapi.dev/api/people/',{
          headers: 
          {'Content-Type': 'application/json'}
    })
    .then((response) => {response.json()})
    .then((data) => {res.send(data)})
    .catch((err) => console.log(err)); 
});



// get request for search query
router.get('/:slug', function(req, res) {
  let query = req.params.slug;
  console.log('Search query: ' + query);
  //fetch(url+plant+query+`&token=${process.env.TREFLE_KEY}`, { 
      fetch('http://swapi.dev/api/people/',{
        //headers: 
        //{'Content-Type': 'application/json'}
  })
  .then((response) => {response.json()})
  .then((data) => {res.send(data)})
  .catch((err) => console.log(err)); 
});




  module.exports = router;
  