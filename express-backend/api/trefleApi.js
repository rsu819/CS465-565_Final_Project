const fetch = require('node-fetch');

const token = 'N01xNVBYZGd6ZjlHeldTTmduUGJEdz09';

//base URL
let url = 'https://trefle.io';

// URL endpoints
let auth = '/api/auth/claim?token=' + token;
let listPlants = '/api/v1/plants?token=' + token;

const authParams = {
    origin: 'www.example.com',
    token: token
};

// request JWT
exports.getAuth = async function() {
    const response = await fetch(
      'https://trefle.io/api/auth/claim', {
        method: 'post',
        body: JSON.stringify(authParams),
        headers: { 'Content-Type': 'application/json' }
      });
    const json = await response.json();
    const JWT = json.token;
    console.log('TOKEN IS: ', JWT);
  };

// list all plants (paginated)
exports.requestAll = async function() {
    const response = await fetch(url+listPlants);
    const json = await response.json();
    console.log(json);
  };

// get specific plant info
//exports.searchPlant = 

// get list of possible matches

// search by scientific name


