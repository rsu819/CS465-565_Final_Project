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

// router.get('/results', function(req, res) {
//   let query = 'rose';
//   console.log('Search query: ' + query);
//   getAuth().then((jwt) => {
//     return fetch(url+plant+query, 
//       { headers: 
//           {'Content-Type': 'application/html', 
//           'Authorization': `Bearer ${jwt}` }
//       })
//   })
//   .then((response) => { return response.json()})
//   .then((data) => {console.log(data)})
//   .catch((err) => console.log(err)); 
// });

router.get('/results', function(req, res) {
  let rose = {
    "data": [
        {
            "id": 122078,
            "common_name": "wild basil",
            "slug": "clinopodium-vulgare",
            "scientific_name": "Clinopodium vulgare",
            "year": 1753,
            "bibliography": "Sp. Pl.: 587 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 62,
            "image_url": "https://bs.floristic.org/image/o/a5b9f297e111b150a4e7a7e29d9bbb8eebc6c0f0",
            "synonyms": [
                "Satureja vulgaris",
                "Calamintha vulgaris",
                "Melissa vulgaris",
                "Acinos vulgaris",
                "Melissa clinopodium"
            ],
            "genus": "Clinopodium",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/clinopodium-vulgare",
                "plant": "/api/v1/plants/clinopodium-vulgare",
                "genus": "/api/v1/genus/clinopodium"
            }
        },
        {
            "id": 102136,
            "common_name": "Basil thyme",
            "slug": "clinopodium-acinos",
            "scientific_name": "Clinopodium acinos",
            "year": 1891,
            "bibliography": "Revis. Gen. Pl. 2: 513 (1891)",
            "author": "(L.) Kuntze",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 62,
            "image_url": "https://bs.floristic.org/image/o/fab2b1c856e708af00a655a3b780e69f0d33addb",
            "synonyms": [
                "Thymus acinos",
                "Thymus acinoides",
                "Thymus heterophyllus",
                "Thymus diffusus",
                "Melissa arvensis",
                "Acinos arvensis subsp. eglandulosus",
                "Acinos acuminatus",
                "Acinos subcrispus",
                "Thymus gibbosus",
                "Acinos villosus",
                "Acinos infectus",
                "Ziziphora infecta",
                "Ziziphora acinos",
                "Acinos clinopodiifacie",
                "Thymus canescens",
                "Melissa acinos",
                "Acinos schizodontus",
                "Calamintha villosa",
                "Acinos eglandulosus",
                "Ziziphora villosa",
                "Ziziphora subcrispa",
                "Ziziphora acuminata",
                "Calamintha acinos var. villosa",
                "Acinos acinos",
                "Ziziphora eglandulosa",
                "Thymus arvensis",
                "Calamintha heterophylla",
                "Clinopodium acinos subsp. villosum",
                "Faucibarba acinos",
                "Thymus concinnus",
                "Acinos arvensis subsp. villosus",
                "Satureja acinos",
                "Calamintha acinos",
                "Acinos thymoides",
                "Acinos arvensis"
            ],
            "genus": "Clinopodium",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/clinopodium-acinos",
                "plant": "/api/v1/plants/clinopodium-acinos",
                "genus": "/api/v1/genus/clinopodium"
            }
        },
        {
            "id": 159562,
            "common_name": "African basil",
            "slug": "ocimum-gratissimum",
            "scientific_name": "Ocimum gratissimum",
            "year": 1753,
            "bibliography": "Sp. Pl.: 1197 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/e7d48386fb044d0c488ce596da681b62a26502f0",
            "synonyms": [],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-gratissimum",
                "plant": "/api/v1/plants/ocimum-gratissimum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 159558,
            "common_name": "American basil",
            "slug": "ocimum-americanum",
            "scientific_name": "Ocimum americanum",
            "year": 1755,
            "bibliography": "Cent. Pl. I: 15 (1755)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/d36f34488d0e68b725faf185f8ad301dffadc8be",
            "synonyms": [
                "Ocimum brachiatum",
                "Ocimum hispidulum",
                "Ocimum dinteri",
                "Ocimum fluminense",
                "Ocimum stamineum",
                "Ocimum incanescens",
                "Ocimum dichotomum",
                "Ocimum thymoides",
                "Ocimum fruticulosum",
                "Ocimum canum"
            ],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-americanum",
                "plant": "/api/v1/plants/ocimum-americanum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 159557,
            "common_name": "sweet basil",
            "slug": "ocimum-basilicum",
            "scientific_name": "Ocimum basilicum",
            "year": 1753,
            "bibliography": "Sp. Pl.: 597 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/eaf722de31333a8724b4bb72c8d51959530fae56",
            "synonyms": [
                "Ocimum album",
                "Ocimum scabrum",
                "Plectranthus barrelieri",
                "Ocimum odorum",
                "Ocimum thyrsiflorum",
                "Ocimum hispidum",
                "Ocimum integerrimum",
                "Ocimum medium",
                "Ocimum nigrum",
                "Ocimum caryophyllatum",
                "Ocimum barrelieri",
                "Ocimum simile",
                "Ocimum citrodorum",
                "Ocimum dentatum",
                "Ocimum cochleatum",
                "Ocimum lanceolatum",
                "Ocimum minus",
                "Ocimum anisatum",
                "Ocimum chevalieri",
                "Ocimum laxum",
                "Ocimum bullatum",
                "Ocimum ciliare",
                "Ocimum ciliatum",
                "Ocimum majus"
            ],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-basilicum",
                "plant": "/api/v1/plants/ocimum-basilicum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 159559,
            "common_name": "least basil",
            "slug": "ocimum-campechianum",
            "scientific_name": "Ocimum campechianum",
            "year": 1768,
            "bibliography": "Gard. Dict. ed. 8: n.º 5 (1768)",
            "author": "Mill.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/63db4a814962e8bd68cec5a1233ae7a8c24383dd",
            "synonyms": [
                "Ocimum pubescens",
                "Ocimum montanum",
                "Ocimum flexuosum",
                "Ocimum guatemalense",
                "Ocimum micranthum"
            ],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-campechianum",
                "plant": "/api/v1/plants/ocimum-campechianum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 159565,
            "common_name": "holy basil",
            "slug": "ocimum-tenuiflorum",
            "scientific_name": "Ocimum tenuiflorum",
            "year": 1753,
            "bibliography": "Sp. Pl.: 597 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/482323244c6bb4d5488d7a89a3ccb0697d12aee7",
            "synonyms": [
                "Ocimum villosum",
                "Ocimum tomentosum",
                "Geniosporum tenuiflorum",
                "Lumnitzera tenuiflora",
                "Ocimum sanctum var. cubensis",
                "Ocimum subserratum",
                "Ocimum sanctum var. hirsutum",
                "Ocimum tenuiflorum var. anisodorum",
                "Ocimum tenuiflorum f. villicaulis",
                "Moschosma tenuiflorum",
                "Ocimum inodorum",
                "Ocimum hirsutum",
                "Ocimum sanctum var. angustifolium",
                "Plectranthus monachorum",
                "Ocimum anisodorum",
                "Ocimum monachorum",
                "Ocimum caryophyllinum",
                "Ocimum sanctum"
            ],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-tenuiflorum",
                "plant": "/api/v1/plants/ocimum-tenuiflorum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 716336,
            "common_name": "Alpine basil thyme",
            "slug": "clinopodium-alpinum",
            "scientific_name": "Clinopodium alpinum",
            "year": 1891,
            "bibliography": "Revis. Gen. Pl. 2: 515 (1891)",
            "author": "(L.) Kuntze",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 62,
            "image_url": "https://bs.floristic.org/image/o/ab4fe211dc174de5f2f31e606be190c926178ee7",
            "synonyms": [
                "Ziziphora alpina",
                "Thymus alpinus",
                "Ziziphora alpicola",
                "Acinos alpinus",
                "Faucibarba alpina",
                "Calamintha alpina",
                "Melissa alpina",
                "Satureja alpina"
            ],
            "genus": "Clinopodium",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/clinopodium-alpinum",
                "plant": "/api/v1/plants/clinopodium-alpinum",
                "genus": "/api/v1/genus/clinopodium"
            }
        },
        {
            "id": 157359,
            "common_name": "basil beebalm",
            "slug": "monarda-clinopodioides",
            "scientific_name": "Monarda clinopodioides",
            "year": 1878,
            "bibliography": "Syn. Fl. N. Amer. 2(1): 375 (1878)",
            "author": "A.Gray",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 4685,
            "image_url": null,
            "synonyms": [
                "Monarda aristata"
            ],
            "genus": "Monarda",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/monarda-clinopodioides",
                "plant": "/api/v1/plants/monarda-clinopodioides",
                "genus": "/api/v1/genus/monarda"
            }
        },
        {
            "id": 731644,
            "common_name": "Bush basil",
            "slug": "ocimum-minimum",
            "scientific_name": "Ocimum minimum",
            "year": 1753,
            "bibliography": "Sp. pl. 2:597.  1753",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/174ca1bce7e9dafdc9ee571c079e62ca919b0828",
            "synonyms": [],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-minimum",
                "plant": "/api/v1/plants/ocimum-minimum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 159564,
            "common_name": "hoary basil",
            "slug": "ocimum-kilimandscharicum",
            "scientific_name": "Ocimum kilimandscharicum",
            "year": 1895,
            "bibliography": "H.G.A.Engler, Pflanzenw. Ost-Afrikas, C: 349 (1895)",
            "author": "Gürke",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 3057,
            "image_url": "https://bs.floristic.org/image/o/7437697461566492acb82669174f81f9dd0c6d08",
            "synonyms": [
                "Ocimum tortuosum",
                "Ocimum johnstonii"
            ],
            "genus": "Ocimum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/ocimum-kilimandscharicum",
                "plant": "/api/v1/plants/ocimum-kilimandscharicum",
                "genus": "/api/v1/genus/ocimum"
            }
        },
        {
            "id": 172564,
            "common_name": "basil mountainmint",
            "slug": "pycnanthemum-clinopodioides",
            "scientific_name": "Pycnanthemum clinopodioides",
            "year": 1842,
            "bibliography": "Amer. J. Sci. Arts 42: 45 (1842)",
            "author": "Torr. & A.Gray",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 5750,
            "image_url": "http://d2seqvvyy3b8p2.cloudfront.net/e999384da906a06d8edffd98868217b8.jpg",
            "synonyms": [
                "Koellia clinopodioides"
            ],
            "genus": "Pycnanthemum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/pycnanthemum-clinopodioides",
                "plant": "/api/v1/plants/pycnanthemum-clinopodioides",
                "genus": "/api/v1/genus/pycnanthemum"
            }
        },
        {
            "id": 718942,
            "common_name": null,
            "slug": "basilicum-polystachyon",
            "scientific_name": "Basilicum polystachyon",
            "year": 1802,
            "bibliography": "Suppl. Meth. 143.  1802 \"<I>polystachion</I>\"",
            "author": "Moench (L.)",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 13780,
            "image_url": "http://d2seqvvyy3b8p2.cloudfront.net/3a87a540f77cb2a92469da6b932e7222.jpg",
            "synonyms": [
                "Perxo polystachyon",
                "Lumnitzera polystachyon",
                "Lumnitzera moschata",
                "Ocimum tashiroi",
                "Ocimum polystachyon",
                "Moschosma polystachyon",
                "Ocimum moschatum",
                "Ocimum dimidiatum",
                "Plectranthus moschatus",
                "Plectranthus micranthus",
                "Moschosma dimidiatum",
                "Moschosma moschatum"
            ],
            "genus": "Basilicum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/basilicum-polystachyon",
                "plant": "/api/v1/plants/basilicum-polystachyon",
                "genus": "/api/v1/genus/basilicum"
            }
        },
        {
            "id": 178677,
            "common_name": "rock soapwort",
            "slug": "saponaria-ocymoides",
            "scientific_name": "Saponaria ocymoides",
            "year": 1753,
            "bibliography": "Sp. Pl.: 409 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Pink family",
            "genus_id": 3342,
            "image_url": "https://bs.floristic.org/image/o/3a6df46121e90ab4ccd6db2d545888536e4a254a",
            "synonyms": [
                "Lychnis ocymoides",
                "Bootia ocymoides",
                "Saponaria repens",
                "Silene alsinoides",
                "Silene ocymoides"
            ],
            "genus": "Saponaria",
            "family": "Caryophyllaceae",
            "links": {
                "self": "/api/v1/species/saponaria-ocymoides",
                "plant": "/api/v1/plants/saponaria-ocymoides",
                "genus": "/api/v1/genus/saponaria"
            }
        },
        {
            "id": 164467,
            "common_name": "beefsteakplant",
            "slug": "perilla-frutescens",
            "scientific_name": "Perilla frutescens",
            "year": 1894,
            "bibliography": "Mem. Torrey Bot. Club 5: 277 (1894)",
            "author": "(L.) Britton",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 5233,
            "image_url": "https://bs.floristic.org/image/o/1433932603603fe07dc4c812b1bfb722bfea480d",
            "synonyms": [
                "Ocimum frutescens",
                "Perilla urticifolia",
                "Perilla ocymoides"
            ],
            "genus": "Perilla",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/perilla-frutescens",
                "plant": "/api/v1/plants/perilla-frutescens",
                "genus": "/api/v1/genus/perilla"
            }
        },
        {
            "id": 157356,
            "common_name": "white bergamot",
            "slug": "monarda-clinopodia",
            "scientific_name": "Monarda clinopodia",
            "year": 1753,
            "bibliography": "Sp. Pl.: 22 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 4685,
            "image_url": "https://bs.floristic.org/image/o/7717904d0932fa6d7d1bfcf2879013cf748808f0",
            "synonyms": [
                "Monarda altissima",
                "Monardella caroliniana",
                "Monarda clinopodifolia",
                "Monarda glabra",
                "Monarda fistulosa var. clinopodia",
                "Monarda allophylla"
            ],
            "genus": "Monarda",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/monarda-clinopodia",
                "plant": "/api/v1/plants/monarda-clinopodia",
                "genus": "/api/v1/genus/monarda"
            }
        },
        {
            "id": 172613,
            "common_name": "Virginia mountainmint",
            "slug": "pycnanthemum-virginianum",
            "scientific_name": "Pycnanthemum virginianum",
            "year": 1908,
            "bibliography": "A.Gray, Manual, ed. 7: 707 (1908)",
            "author": "(L.) T.Durand & B.D.Jacks. ex B.L.Rob. & Fernald",
            "status": "accepted",
            "rank": "species",
            "family_common_name": "Mint family",
            "genus_id": 5750,
            "image_url": null,
            "synonyms": [
                "Nepeta virginica",
                "Thymus verticillatus",
                "Thymus lanceolatus",
                "Satureja virginica",
                "Pycnanthemum lanceolatum",
                "Koellia virginiana",
                "Satureja virginiana",
                "Koellia virginica",
                "Koellia lanceolata",
                "Brachystemum virginicum",
                "Pycnanthemum lanceolatum var. latifolium",
                "Pycnanthemum virginianum f. citriodora",
                "Brachystemum lanceolatum",
                "Pycnanthemum lanceolatum var. angustifolium"
            ],
            "genus": "Pycnanthemum",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/pycnanthemum-virginianum",
                "plant": "/api/v1/plants/pycnanthemum-virginianum",
                "genus": "/api/v1/genus/pycnanthemum"
            }
        },
        {
            "id": 331088,
            "common_name": null,
            "slug": "cachrys-cristata",
            "scientific_name": "Cachrys cristata",
            "year": 1830,
            "bibliography": "Prodr. 4: 238 (1830)",
            "author": "DC.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 7732,
            "image_url": "http://d2seqvvyy3b8p2.cloudfront.net/47968324de5a9048fb136e78309a6600.jpg",
            "synonyms": [
                "Trachymarathrum siculum",
                "Cachrys echinophora",
                "Hippomarathrum cristatum"
            ],
            "genus": "Cachrys",
            "family": "Apiaceae",
            "links": {
                "self": "/api/v1/species/cachrys-cristata",
                "plant": "/api/v1/plants/cachrys-cristata",
                "genus": "/api/v1/genus/cachrys"
            }
        },
        {
            "id": 723686,
            "common_name": null,
            "slug": "condea-verticillata",
            "scientific_name": "Condea verticillata",
            "year": 2012,
            "bibliography": "Phytotaxa 58:15.  2012",
            "author": "Harley & J.F.B.Pastore (Jacq.)",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 3728,
            "image_url": "http://d2seqvvyy3b8p2.cloudfront.net/a47d821cdbb99ce42fd9b3a6be795be1.jpg",
            "synonyms": [
                "Hyptis parviflora",
                "Hyptis axillaris",
                "Hyptis pringlei",
                "Stachys patens",
                "Mesosphaerum verticillatum",
                "Mentha hyptiformis",
                "Hyptis verticillata"
            ],
            "genus": "Condea",
            "family": "Lamiaceae",
            "links": {
                "self": "/api/v1/species/condea-verticillata",
                "plant": "/api/v1/plants/condea-verticillata",
                "genus": "/api/v1/genus/condea"
            }
        },
        {
            "id": 367908,
            "common_name": null,
            "slug": "aloe-christianii",
            "scientific_name": "Aloe christianii",
            "year": 1936,
            "bibliography": "J. S. African Bot. 2: 171 (1936)",
            "author": "Reynolds",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 279,
            "image_url": "http://d2seqvvyy3b8p2.cloudfront.net/c88838139f62b71a446b876ff02f4958.jpg",
            "synonyms": [],
            "genus": "Aloe",
            "family": "Asphodelaceae",
            "links": {
                "self": "/api/v1/species/aloe-christianii",
                "plant": "/api/v1/plants/aloe-christianii",
                "genus": "/api/v1/genus/aloe"
            }
        }
    ],
    "links": {
        "self": "/api/v1/plants/search?q=%27basil%27",
        "first": "/api/v1/plants/search?page=1&q=%27basil%27",
        "next": "/api/v1/plants/search?page=2&q=%27basil%27",
        "last": "/api/v1/plants/search?page=4&q=%27basil%27"
    },
    "meta": {
        "total": 76
    }
  }
  res.send(rose.data);
});


router.get('/:slug', function(req, res) {
  res.send('THIS PAGE IS ABOUT ' + req.body.keyword);
});

module.exports = router;
