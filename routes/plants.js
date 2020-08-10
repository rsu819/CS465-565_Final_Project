if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
let express = require('express');
let router = express.Router();
let fetch = require('node-fetch'); 
let parser = require('body-parser');
const app = require('../app');

//base URL
let url = 'https://trefle.io';

// URL endpoints
let search = `/api/v1/plants/search?q=`;
let plants = `/api/v1/plants/`;

router.use(parser.json());

router.get('/', function (req, res) {
  res.redirect('./home');
});

router.post('/next', async function(req, res) {
  try {
    let request = await req.body.endpoint;
    console.log(request);
    let path = await request;
 
    const response = await fetch(url+path+`&token=${process.env.TREFLE_KEY}`);
    const json = await response.json();
    console.log(json);
    res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get('/:slug', async function(req, res) {
  let query = req.params.slug;
  console.log('Search query: ' + query);
  try {
    const response = await fetch(url+search+query+`&token=${process.env.TREFLE_KEY}`);
    const json = await response.json();
    console.log(json);
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
    const response = await fetch(url+plants+`?token=${process.env.TREFLE_KEY}&filter[family_common_name]=${query}`);
  const json = await response.json();
  console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
    res.send(err);
  }
});

// get information for selected plant
router.get('/:slug/:id', async function(req, res) {
  let query = req.params.id;
  console.log('Search id: ' + query);
  try {
    const response = await fetch(url+plants+query+`?token=${process.env.TREFLE_KEY}`);
  const json = await response.json();
  console.log(json);
  res.status(200).send(json);
  }
  catch(error) {
    console.log(error);
  }
});



  module.exports = router;
  