const fetch = require('node-fetch');
const app = require('../app');

// import API call functions
const trefle = require('../api/trefle');

// methods for retrieving API request data
exports.getJWT = function(req, res, next) {
    trefle.getAuth().then(response => console.log(response.token));
};

// exports.results = function(req, res) {
//     res.send('SEARCH RESULTS: List results from keyword search');
// };

    

