import React, { useEffect, Link } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../stylesheets/Bio.css";
import { useRouteMatch } from "react-router-dom";

const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:3000";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function PlantMiniSquare(props) {

  let squares = [];
  let length = props.family.length;
  console.log(length);

  // let handleClick = function(index) {
  //   this.props.history.push(`../${props.family[index].common_name}/${props.family[index].id}`);
  // }

  if (length <= 1) {
    return (<Col>
      <div className="notFound">
        <span>No other plants in this family exist <br />
                            on this database <br /> explore more varieties with our <br /></span>
        <img src={require("../images/cactusIcon.png")}></img>
        <a href="../../finder" ><u>Plant Finder!</u></a>
      </div>
    </Col>)
  }
  // href={`../${props.family[i].common_name}/${props.family[i].id}`}
  if (length < 6) {
    for (let i = getRandomInt(5); i < length; ((i + 1) % 5)) {
      
      if (props.family[i].common_name !== props.skip) {
        let path = `../${props.family[i].common_name}/${props.family[i].id}`;
        squares.push(<Col>
          <img src={require('../images/leafimg.jpeg')} alt='plant icon'></img>
          <div className="commonName p-2">{props.family[i].common_name}</div>
          <div className="scientificName p-2">{props.family[i].scientific_name}</div>
          <Button className="btn btn-sm" onClick={() => (props.history.push(path))} href={path} >Go!</Button>
        </Col>)
      }
    }
  }
  // href={`../${props.family[i].common_name}/${props.family[i].id}`}
  else {
    let i = getRandomInt(length);
    let j = 0
    do {
      console.log(i);
      if (props.family[i].common_name !== props.skip) {
        let path = `../${props.family[i].common_name}/${props.family[i].id}`;
        squares.push(<Col>
          <img src={require('../images/leafimg.jpeg')} alt='plant icon'></img>
          <div>{props.family[i].common_name}</div>
          <div>{props.family[i].scientific_name}</div>
          <Button className="btn-sm" onClick={() => (props.history.push(path))} href={path}>Go!</Button>
        </Col>)
      }
      i = (i + 1) % length;
      j++;
    } while (j < 5)
  }
  return squares;

}

class PlantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      family: [],
      isLoaded: false
    }
  }
  componentDidMount = async function () {
    try {
      let familyRes = await fetch(`${baseUrl}/plants/family/${this.props.family}`);
      let family = await familyRes.json();
      this.setState({
        family: family.data,
        isLoaded: true
      })
    }
    catch (error) {
      this.setState({
        isLoaded: true,
        error
      })
    }
  }

  render() {
    const { error, isLoaded, family } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return <Row>
        <PlantMiniSquare family={family} skip={this.props.skip} history={this.props.history} />
      </Row>
    }

  }
}

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

function Bio(props) {
  let { url } = useRouteMatch();
  console.log(url);
  const [plantInfo, setInfo] = useState([]);
  const [isLoaded, setStatus] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async function fetchData() {
    try {
        let response = await fetch(`${baseUrl}${url}`);
        let info = await response.json();
        console.log(info.data);
        setInfo(info.data);
        setStatus(true);
    }
    
    catch (error) {
      setError(error);
    }
    //fetchData();
  }, []);



  if (error) {
    return <div>Error: {error.message}</div>
  }
  else if (!isLoaded) {
    return <div className="loading mt-5 pt-3">Loading Plant Data...</div>
  }
  else {
    let synonyms = [];
    plantInfo.main_species.synonyms.forEach((plant) => { synonyms.push(plant.name) })
    return (
      <div>
        <h1 className="plantInfo m-4" >{plantInfo.common_name}</h1>
        <div>
          <img className="plantPic" src={plantInfo.image_url} alt={`${plantInfo.common_name} example`} />
          <div className="plantBio m-4">
            Common Name: {plantInfo.common_name}<br />
                        Scientific Name: {plantInfo.scientific_name}<br />
                        Growth Habit: {plantInfo.main_species.specifications.growth_habit}<br />
                        Average Height: {plantInfo.main_species.specifications.avg_height} <br />
            <FlowerFoliage flower={plantInfo.main_species.flower} />
                        Amount of light needed (0-10): {plantInfo.main_species.growth.light} lux <br />
                        Humidity: {plantInfo.main_species.growth.athmospheric_humidity}<br />
                        Minimum Precipitation (in mm): {plantInfo.main_species.growth.minimum_precipitation.mm}<br />
                        Maximum Precipitation (in mm): {plantInfo.main_species.growth.maximum_precipitation.mm}<br />
                        Minimum Temperature Needed: {plantInfo.main_species.growth.minimum_temperature.deg_f}<br />
                        Maximum Temperature Tolerated: {plantInfo.main_species.growth.maximum_temperature.deg_f}<br /><br />
                        Synonyms: <br />
            {synonyms.join(', ')}
          </div>
        </div>
        <hr />
        <Container fluid className="suggestions m-5">
          <h6 className="title m-5">Varieties in the same family:</h6>
          <PlantRow family={plantInfo.family_common_name} skip={plantInfo.common_name} history={props.history} />
        </Container>
      </div>
    )
  }
}






export default Bio;