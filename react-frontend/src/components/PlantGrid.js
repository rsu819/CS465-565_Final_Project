import React from "react";
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";

//the props passed in should be attr with JSON object fields
class PlantSquare extends React.Component {
 
    render() {
    return <Col className='square p-4 border' sm={6} md={4}>
            <img href={this.props.image} alt={this.props.name}/>
            <div>Name: {this.props.name}</div>
            <div>Scientific Name: {this.props.sciName}</div>
            <div>
                <a href={this.props.url}>Go!</a>
            </div>
        </Col>
    }
}


class PlantRow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state = {
            data: undefined
        }
    this.fetchPlant(this.props.data);
    }

    fetchPlant(plant) {
        console.log(plant);
        fetch(`http://www.localhost:3000/plants/${plant}`)
        .then((response) => {response.json()})
        .then((json) => { 
            console.log(json);
            this.setState({data: json.data})})
        .catch((err) => console.log(err));
    }
    
    renderPlantSquare(plant) {
        let image = plant.image_url;
        let name = plant.common_name; 
        console.log(name);
        let slug = plant.common_name;
        let sciName = plant.scientific_name;
        let url = '/plants/'+plant.slug;
        return <PlantSquare key={plant.id}
                    image={image} 
                    name={name} 
                    sciName={sciName}
                    slug={slug}
                    url={url}
                />
    }
    // componentDidMount() {
    //     this.fetchPlant(this.props.data);
    //     //console.log(this.state.data)
    // }


    render() {
        return <Row>{this.state.data.map((each) => {this.renderPlantSquare(each)})}</Row>
    }
}


class PlantGrid extends React.Component {
  
    render() {
        
        return  <div>
                    <h2 className='results m-5'>Search Results</h2>
                    <Container className="results" name="results">
                       <PlantRow data={this.props.value}/>
                    </Container>
                </div>
    }                        
}


export default PlantGrid;
