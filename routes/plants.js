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
let plant = `/api/v1/plants/search?q=`;
let id = `/api/v1/plants/`;

// get information for selected plant
router.get('/:slug/:id', async function(req, res) {
  let id = req.params.id;
  console.log('Search id: ' + id);
  try {
    const response = await fetch(url+id+query+`?token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  //console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
});

router.get('/:slug', async function(req, res) {
  let query = req.params.slug;
  console.log('Search query: ' + query);
  try {
    const response = await fetch(url+plant+query+`&token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  //console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
  
});



  module.exports = router;
  