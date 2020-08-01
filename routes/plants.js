let express = require('express');
const { default: fetch } = require('node-fetch');
let router = express.Router();

//const token = ${{ secrets.TREFLETOKEN }};
const token = 'N01xNVBYZGd6ZjlHeldTTmduUGJEdz09';

//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim';
let plant = '/api/v1/plants/search?q=';

const authParams = {
    origin: 'http://localhost:3000',
    token: token
};

let getAuth = async function() {
  const response = await fetch(
    url+auth, {
      method: 'post',
      body: JSON.stringify(authParams),
      headers: { 'Content-Type': 'application/json' }
    });
  const json = await response.json();
  return json;
  };

let jwt = '';
router.get('/results', function(req, res) {
    getAuth().then(token => jwt = token.token).catch((err) => {console.log(err)});
    console.log(jwt);
    let data = req.query.search;
    fetch(`http://trefle.io/api/v1/plants/search?token=${jwt}&q=`+data, {method: 'GET'})
    .then((response) => {response.json()})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
    
});

// router.get('/:slug', function(req, res) {
//   res.send('THIS PAGE IS ABOUT ' + req.body.keyword);
// });

module.exports = router;
