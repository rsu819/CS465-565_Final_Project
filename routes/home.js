const fetch = require('node-fetch');
const router = require('./plants');

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

router.get('/', function(req, res) {
    res.send(getAuth);
});



