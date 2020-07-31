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
    origin: 'https://plantsplantsplants.herokuapp.com/',
    token: token
};

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


router.get('/results', function(req, res) {
    // let jwt = getAuth();
    // console.log(jwt);
    // fetch(`http://trefle.io/api/v1/plants/search?token=${process.env.TREFLE_KEY}&q=basil`)
    // .then((response) => {console.log(response)})
    // .then((data) => res.send(data))
    // .catch((err) => console.log(err));
    fetch('https://jsonplaceholder.typicode.com/todos/1').then((response => {res.send(response)}))
});

router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.params.slug);
});

module.exports = router;
