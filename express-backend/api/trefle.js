const fetch = require('node-fetch');

//const token = $TREFLETOKEN;
const token = "N01xNVBYZGd6ZjlHeldTTmduUGJEdz09";
//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim';
let listPlants = '/api/v1/plants?token=';

const authParams = {
    origin: 'www.example.com',
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

// list all plants (paginated)
exports.requestAll = async function(jwt) {

    const response = await fetch(url+listPlants+jwt);
    const json = await response.json();
    console.log(json);
    return json;
  };

// get specific plant info

// get list of possible matches

// search by scientific name


