import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../stylesheets/Bio.css";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import PlantMiniSquare from "./PlantMiniSquare";

const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:3000";


// class PlantRow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       family: [],
//       newUrl: "",
//       isLoaded: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(url) {
//     this.setState(url);
//   }
  
//   componentDidMount = async function () {
//     try {
//       let familyRes = await fetch(`${baseUrl}/plants/family/${this.props.family}`);
//       let family = await familyRes.json();
//       this.setState({
//         family: family.data,
//         isLoaded: true
//       })
//     }
//     catch (error) {
//       this.setState({
//         isLoaded: true,
//         error
//       })
//     }
//   }

//   render() {
//     const { error, isLoaded, family } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>
//     }
//     else if (!isLoaded) {
//       return <div>Loading...</div>
//     }
//     else {
//       return <Row>
//         <PlantMiniSquare family={family} skip={this.props.skip} history={this.props.history} onClick={this.props.onClick} />
//       </Row>
//     }
//   }
// }

function Flower(props) {
  return <div>Flower color: {props.color}</div>
}

function Foliage(props) {
  return <div>Foliage color: {props.color}</div>
}

function FlowerFoliage(props) {
  if (props.flower && props.foliage) {
    if (props.flower.color && props.foliage.color) {
      return <div>
        <Flower color={props.flower.color} />
        <Foliage color={props.foliage.color} />
      </div>
    }
  }
  else if (props.flower) {
    if (props.flower.color) {
      return <Flower color={props.flower.color} />
    }
  }
  else if (props.foliage) {
    if (props.foliage.color) {
      return <Foliage color={props.foliage.color} />
    }
  }
  return null;
}

function Line(props) {
  
  if (!props.value) {
    return null;
  }
  return <div>{props.name}: {props.value}</div>
}

function PlantInfo(props) {
  let synonyms = [];
  if (props.synoyms) {
    props.synonyms.forEach((plant) => { synonyms.push(plant.name) })
  }

  return <div>
            <Line name="Common Name" value={props.common_name}/>
            <Line name="Scientific Name" value={props.scientific_name}/>
            <Line name="Growth Habit" value={props.growth_habit}/>
            <Line name="Average Height" value={props.avg_height}/>
            {/* <FlowerFoliage flower={props.main_species.flower} /> */}
            <Line name="Amount of Light (0-10)" value={props.light}/>
            <Line name="Minimum Precipitation (in mm)" value={props.min_precip}/>
            <Line name="Maximum Precipitation (in mm)" value={props.max_precip}/>
            <Line name="Minimum Temperature Required (in Fahrenheit)" value={props.min_temp}/>
            <Line name="Maximum Temperature Tolerated" value={props.max_temp}/>
            <div>Synonyms: {synonyms.join(', ')}</div>    
        </div>
}



function Bio(props) {
  let { url } = useRouteMatch();
  let history = useHistory();
  let location = useLocation();
  const [plantInfo, setInfo] = useState([]);
  const [familyName, setFamilyName] = useState("");
  const [isLoaded, setStatus] = useState(false);
  const [error, setError] = useState(null);
  const [newUrl, setUrl] = useState(url);
  const [squares, setSquares] = useState([]);
  const [length, setLength] = useState(null);
  const [loc, setLoc] = useState("");


  function handleClick(updatedUrl) {
    setUrl(updatedUrl);
    history.push(updatedUrl);
    setLoc(location);
  }

  // function getRandomInt(max) {
  //   return Math.floor(Math.random() * Math.floor(max));
  // }
  
  function renderSquares(sq) {
    return sq.slice(0,5).map((plant) => {
              return (<Col className="columns" lg={2} sm={2} key={plant.id}>
            <img src={require('../images/leafimg.jpeg')} alt='plant icon'></img>
            <div className="commonName p-2">{plant.common_name}</div>
            <div className="scientificName p-2">{plant.scientific_name}</div>
            <Button className="btn btn-sm" 
                    value={plant.common_name} 
                    id={plant.id} onClick={() => handleClick(`/plants/${plant.common_name}/${plant.id}`)}>
                  Go!
            </Button>
          </Col>)          
        })
  }

  useEffect(() => {
    async function fetchData() {
    try {
        let response = await fetch(`${baseUrl}${newUrl}`);
        let info = await response.json();
        setInfo(info.data);
        console.log(info.data);
        let fam = async function() {

          let famRes = await fetch(`${baseUrl}/plants/family/${info.data.family_common_name}`);
          let famInfo = await famRes.json();
          return famInfo;
        }
        let family = await fam();
        console.log(family.data);
        setSquares(family.data);
        setStatus(true);
        
        setFamilyName(info.data.family_common_name);
        setLength(family.data.length);
    }        
    catch (error) {
      setError(error);
    }
  }
  fetchData();
}, [location]);


  if (error) {
    return <div>Error: {error.message}</div>
  }
  else if (!isLoaded) {
    return <div className="loading mt-5 pt-3">Loading Plant Data...</div>
  }
  else if (!plantInfo.main_species) {
    return <div className="no info mt-5">
              <h3>No Information Available.</h3>
          </div>
  }
  else {
      return <div>
        <h1 className="plantInfo m-4" >{plantInfo.common_name}</h1>
        <div>
        <Container fluid>
          <Row className="justify-content-center">	          
            <Col lg={6} sm={6}>	
              <img className="plantPic" style={{ width: '75%' }} src={plantInfo.image_url} alt={`${plantInfo.common_name} example`} />	
            </Col>	
          </Row>
          <div className="plantBio m-4">
            <PlantInfo 
                common_name={plantInfo.common_name}
                scientific_name={plantInfo.scientific_name} 
                growth_habit={plantInfo.main_species.specifications.growth_habit}
                avg_height={plantInfo.main_species.specifications.avg_height}
                flower={plantInfo.main_species.flower}
                light={plantInfo.main_species.growth.light} 
                min_precip={plantInfo.main_species.growth.minimum_precipitation.mm}
                max_precip={plantInfo.main_species.growth.maximum_precipitation.mm}
                min_temp={plantInfo.main_species.growth.minimum_temperature.deg_f}
                max_temp={plantInfo.main_species.growth.maximum_temperature.deg_f}
                synonyms={plantInfo.main_species.synonyms}/>
            </div>
        </Container>
        <Container fluid className="suggestions m-5">
          <h6 className="title m-5">Varieties in the same family:</h6>
          <div>
            { (length > 5)
              ? <Row>{ renderSquares(squares) }</Row>
              : <Row>
                  <Col>
                    <div className="notFound">
                      <span>No other plants in this family exist <br />
                                  on this database <br /> explore more varieties with our <br /></span>
                      <img src={require("../images/cactusIcon.png")} alt="cactus icon"></img>
                      <Button href="../finder"><u>Plant Finder!</u></Button>
                    </div>
                  </Col>
                </Row>
            }
            </div>
        </Container>
      </div>
    </div>
    
  }
} 


export default Bio;