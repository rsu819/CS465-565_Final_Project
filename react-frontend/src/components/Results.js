import React from "react";
import '../App.css';
//import { response } from "express";

sampleJSON = [
    {
        "id": 678281,
        "common_name": "Evergreen Oak",
        "slug": "quercus-rotundifolia",
        "scientific_name": "Quercus rotundifolia",
        "year": 1785,
        "bibliography": "Encycl. 1: 723 (1785)",
        "author": "Lam.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": null,
        "genus_id": 5778,
        "image_url": "https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30",
        "synonyms": [
            "Quercus rotundifolia var. macrocarpa",
            "Quercus rotundifolia f. brevicupulata",
            "Quercus rotundifolia subsp. maghrebiana",
            "Quercus rotundifolia var. brevicupulata",
            "Quercus rotundifolia var. pilosella",
            "Quercus ilex subsp. ballota",
            "Quercus ilex f. macrocarpa",
            "Quercus rotundifolia f. calycina",
            "Quercus rotundifolia f. macrocarpa",
            "Quercus rotundifolia f. pilosella",
            "Quercus rotundifolia f. dolichocalyx",
            "Quercus calycina",
            "Quercus ilex f. brevicupulata",
            "Quercus ballota",
            "Quercus rotundifolia f. crassicupulata",
            "Quercus lyauteyi"
        ],
        "genus": "Quercus",
        "family": "Fagaceae",
        "links": {
            "self": "/api/v1/species/quercus-rotundifolia",
            "plant": "/api/v1/plants/quercus-rotundifolia",
            "genus": "/api/v1/genus/quercus"
        }
    },
    {
        "id": 190500,
        "common_name": "stinging nettle",
        "slug": "urtica-dioica",
        "scientific_name": "Urtica dioica",
        "year": 1753,
        "bibliography": "Sp. Pl.: 984 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Nettle family",
        "genus_id": 1028,
        "image_url": "https://bs.floristic.org/image/o/85256a1c2c098e254fefe05040626a4df49ce248",
        "synonyms": [
            "Urtica submitis",
            "Urtica haussknechtii",
            "Urtica eckloniana",
            "Urtica sicula",
            "Urtica tibetica",
            "Urtica major"
        ],
        "genus": "Urtica",
        "family": "Urticaceae",
        "links": {
            "self": "/api/v1/species/urtica-dioica",
            "plant": "/api/v1/plants/urtica-dioica",
            "genus": "/api/v1/genus/urtica"
        }
    },
    {
        "id": 126957,
        "common_name": "orchardgrass",
        "slug": "dactylis-glomerata",
        "scientific_name": "Dactylis glomerata",
        "year": 1753,
        "bibliography": "Sp. Pl.: 71 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Grass family",
        "genus_id": 2284,
        "image_url": "https://bs.floristic.org/image/o/05c2f3cf28a921235daece7b31806741c7251784",
        "synonyms": [
            "Bromus glomeratus",
            "Dactylis glomerata var. vivipara",
            "Phalaris glomerata",
            "Trachypoa vulgaris",
            "Festuca glomerata",
            "Koeleria dactylis"
        ],
        "genus": "Dactylis",
        "family": "Poaceae",
        "links": {
            "self": "/api/v1/species/dactylis-glomerata",
            "plant": "/api/v1/plants/dactylis-glomerata",
            "genus": "/api/v1/genus/dactylis"
        }
    },
    {
        "id": 101913,
        "common_name": "common yarrow",
        "slug": "achillea-millefolium",
        "scientific_name": "Achillea millefolium",
        "year": 1753,
        "bibliography": "Sp. Pl.: 899 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Aster family",
        "genus_id": 44,
        "image_url": "https://bs.floristic.org/image/o/d8bdcc8a8328551e6e6ce50129e8e7a871b6b3a5",
        "synonyms": [
            "Achillea compacta",
            "Achillea tanacetifolia",
            "Achillea crassifolia",
            "Achillea millefolium var. maritima",
            "Achillea ambigua",
            "Achillea sylvatica",
            "Achillea magna",
            "Achillea borealis var. fusca",
            "Achillea millefolium var. puberula",
            "Achillea pratensis",
            "Achillea ochroleuca",
            "Achillea borealis f. fusca",
            "Achillea millefolium var. occidentalis",
            "Achillea millefolium f. rubicunda",
            "Achillea millefolium var. pacifica",
            "Achillea sordida",
            "Achillea millefolium var. borealis",
            "Millefolium vulgare",
            "Achillea setacea",
            "Chamaemelum millefolium",
            "Achillea millefolium var. dipetala",
            "Achillea millefolium f. rosea",
            "Achillea tenuifolia",
            "Achillea lanulosa f. rubicunda",
            "Achillea millefolium var. spathulata",
            "Achillea bicolor",
            "Achillea subhirsuta",
            "Achillea tanacetifolia var. dentifera",
            "Achillea millefolium var. lanata",
            "Achillea albida",
            "Santolina millefolium",
            "Achillea millefolium var. densiloba",
            "Achillea millefolium var. colliniformis",
            "Achillea virgata",
            "Achillea marginata",
            "Achillea haenkeana",
            "Achillea millefolium var. dissecta",
            "Achillea millefolium subvar. parviligulata",
            "Achillea millefolium subsp. atrotegula",
            "Alitubus millefolium",
            "Ptarmica borealis",
            "Chamaemelum tanacetifolium",
            "Achillea millefolium f. rhodantha",
            "Achillea albicaulis",
            "Achillea cuspidata",
            "Achillea intermedia",
            "Achillea millefolium f. iserana",
            "Achillea millefolium var. iserana",
            "Achillea millefolium f. pseudopannonica",
            "Millefolium officinale",
            "Achillea millefolium var. purpurea",
            "Achillea tenuis",
            "Achillea lanulosa subsp. megacephala",
            "Achillea anethifolia",
            "Achillea millefolium subsp. balearica",
            "Achillea borealis subsp. typica",
            "Achillea millefolium f. roseiflora",
            "Achillea coronopifolia",
            "Achillea submellifolium",
            "Achillea scabra",
            "Achillea millefolium f. albiflora",
            "Achillea millefolium subsp. lanulosa",
            "Achillea polyphylla",
            "Achillea millefolium var. sylvatica",
            "Achillea millefolium f. discolor",
            "Achillea millefolium var. lobata",
            "Achillea ceretanica",
            "Achillea pseudotanacetifolia",
            "Achillea ossica",
            "Achillea nabelekii",
            "Achillea millefolium var. sordida",
            "Achillea millefolium subsp. pallidotegula",
            "Achillea lanulosa subsp. typica",
            "Achillea millefolium f. roseoides",
            "Achillea lanata",
            "Achillea millefolium f. californica",
            "Achillios millefoliatus",
            "Achillea millefolium var. manshurica",
            "Achillea palmeri",
            "Achillea millefolium subsp. pannonica",
            "Achillea pecten-veneris",
            "Achillea millefolium var. asplenifolia",
            "Achillea millefolium subsp. occidentalis",
            "Achillea millefolium subsp. borealis",
            "Achillea millefolium [unranked] lanulosa",
            "Achillea megacephala",
            "Achillea lanulosa subsp. alpicola",
            "Achillea borealis subsp. californica",
            "Achillea borealis subsp. arenicola",
            "Achillea puberula",
            "Achillea pacifica",
            "Achillea rosea",
            "Achillea occidentalis",
            "Achillea millefolium var. russeolata",
            "Achillea millefolium var. rosea",
            "Achillea millefolium var. lanulosa",
            "Achillea millefolium var. gracilis",
            "Achillea millefolium var. aspleniifolia",
            "Achillea lanulosa var. eradiata",
            "Achillea lanulosa var. arachnoidea",
            "Achillea lanulosa",
            "Achillea laxiflora",
            "Achillea eradiata",
            "Achillea angustissima",
            "Achillea nigrescens",
            "Achillea millefolium var. nigrescens",
            "Achillea millefolium var. megacephala",
            "Achillea millefolium var. litoralis",
            "Achillea gigantea",
            "Achillea millefolium var. gigantea",
            "Achillea californica",
            "Achillea borealis var. californica",
            "Achillea millefolium var. californica",
            "Achillea millefolium var. parvula",
            "Achillea millefolium var. parviligula",
            "Achillea millefolium var. fulva",
            "Achillea borealis",
            "Achillea borealis var. arenicola",
            "Achillea arenicola",
            "Achillea millefolium var. arenicola",
            "Achillea subalpina",
            "Achillea millefolium var. fusca",
            "Achillea lanulosa var. alpicola",
            "Achillea fusca",
            "Achillea alpicola",
            "Achillea millefolium var. alpicola",
            "Achillea dentifera"
        ],
        "genus": "Achillea",
        "family": "Asteraceae",
        "links": {
            "self": "/api/v1/species/achillea-millefolium",
            "plant": "/api/v1/plants/achillea-millefolium",
            "genus": "/api/v1/genus/achillea"
        }
    },
    {
        "id": 167888,
        "common_name": "narrowleaf plantain",
        "slug": "plantago-lanceolata",
        "scientific_name": "Plantago lanceolata",
        "year": 1753,
        "bibliography": "Sp. Pl.: 113 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Plantain family",
        "genus_id": 5418,
        "image_url": "https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b",
        "synonyms": [
            "Plantago trinervis",
            "Plantago lanceolata var. lanuginosa",
            "Plantago glareosa",
            "Plantago azorica",
            "Plantago lanceolata var. minor",
            "Plantago flexuosa",
            "Plantago succisa",
            "Plantago glabriflora",
            "Plantago fontis-curvae",
            "Arnoglossum lanceolatum",
            "Plantago sylvatica",
            "Plantago byzantina",
            "Lagopus lanceolatus",
            "Lagopus timbali",
            "Plantago linkii",
            "Plantago elata",
            "Plantago schottii",
            "Plantago yezomaritima",
            "Plantago contorta",
            "Plantago preslii",
            "Plantago variabilis",
            "Plantago hungarica",
            "Plantago attenuata",
            "Plantago eriophora",
            "Plantago pseudopatagonica",
            "Plantago glauca",
            "Plantago ambigua",
            "Plantago dubia",
            "Plantago longiscapa",
            "Plantago lanceolata var. dubia",
            "Plantago capitata",
            "Plantago leiopetala",
            "Plantago orientalis",
            "Plantago nutans",
            "Plantago kurdica",
            "Plantago lanuginosa",
            "Plantago lanceolata var. sphaerostachya"
        ],
        "genus": "Plantago",
        "family": "Plantaginaceae",
        "links": {
            "self": "/api/v1/species/plantago-lanceolata",
            "plant": "/api/v1/plants/plantago-lanceolata",
            "genus": "/api/v1/genus/plantago"
        }
    },
    {
        "id": 173327,
        "common_name": "English oak",
        "slug": "quercus-robur",
        "scientific_name": "Quercus robur",
        "year": 1753,
        "bibliography": "Sp. Pl.: 996 (1753)",
        "author": "L.",
        "status": "accepted",
        "rank": "species",
        "family_common_name": "Beech family",
        "genus_id": 5778,
        "image_url": "https://bs.floristic.org/image/o/2292b670683abdaac354389514105df0018d9ef8",
        "synonyms": [
            "Quercus longaeva"
        ],
        "genus": "Quercus",
        "family": "Fagaceae",
        "links": {
            "self": "/api/v1/species/quercus-robur",
            "plant": "/api/v1/plants/quercus-robur",
            "genus": "/api/v1/genus/quercus"
        }
    }
]

class PlantSquare extends React.Component{
    render() { return
        <Col>
            <img href={props.image_url}/>
            <p>Name: {props.common_name}</p>
            <p>Family: {props.family_common_name}</p>
            <p>Genus: {props.genus}</p>
        </Col>
    }
        
}

class PlantRow extends React.Component {
    renderPlantSquare(object) { image_url={object.image_url} common_name={object.common_name}
        return <PlantSquare 
    }

render() {
    return <Row>

    </Row>
}
}

class PlantRow(props) extends React.Component{

}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }
    
   
    
    render() {
        sampleJSON.forEach(plant) {
            PlantSquare(props= plant)
        }
        return ( <Container>
            
        </Container>
        );
    }
}

export default Results;
