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
let family = `/api/v1/plants?filter[family]=`;

router.get('/:slug', async function(req, res) {
  let query = req.params.slug.replace(/\s/g, '');
  console.log('Search query: ' + query);
  try {
    const response = await fetch(url+plant+query+`&token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
  
});

// get information for selected plant
router.get('/:slug/:id', async function(req, res) {
  let query = req.params.id;
  console.log('Search id: ' + query);
  try {
    const response = await fetch(url+id+query+`&token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  //console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
});

// get information for genus list
router.get('/family/:name', async function(req, res) {
  let query = req.params.name;
  console.log('Search family: ' + query);
  try {
    const response = await fetch(url+family+query+`?token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
});



  module.exports = router;
  