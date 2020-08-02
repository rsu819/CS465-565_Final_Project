if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
let express = require('express');
let router = express.Router();
let fetch = require('node-fetch'); 
const { response } = require('express');
const token = process.env._TREFLE_KEY;
const app = require('../app');
//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim';
let plant = '/api/v1/plants/search?q=';

const authParams = {
    origin: 'https://www.example.com',
    token: process.env.TREFLE_KEY
};
let json;
let jwt = '';
let getAuth = function() {
  return fetch(
      url+auth, {
        method: 'post',
        body: JSON.stringify(authParams),
        headers: { 'Content-Type': 'application/json' }
      })
    .then((response) => { return response.json()})
    .then((token) => {return token.token} )
    .catch((err) => {console.log(err)});
};

// router.get('/', function(req, res) {
//   if (req.session.searchKeyword === undefined) {
//     req.session.searchKeyword = "";
//   }
//   req.session.searchKeyword = req.query.search;
//   console.log(req.session.searchKeyword);
//   res.status(200);
//   res.set({'Content-Type': 'text/html'})
//   res.sendStatus(200)
// });

router.get('/', function(req, res) {
  let query = 'rose';
  console.log('Search query: ' + query);
  getAuth().then((jwt) => {
    return fetch(url+plant+query, 
      { headers: 
          {'Content-Type': 'application/html', 
          'Authorization': `Bearer ${jwt}` }
      })
  })
  .then((response) => { return response.json()})
  .then((data) => {res.send(data)})
  .catch((err) => console.log(err)); 
});

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.body.keyword);
});

module.exports = router;
