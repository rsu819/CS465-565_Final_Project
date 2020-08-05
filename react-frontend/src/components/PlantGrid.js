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
    // constructor(props) {
    //     super(props);
        //this.fetchPlant(this.props.data);
        //console.log(this.state)
        // this.state = {
        //     data: this.props.data
        // }

    
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

    render() {
        //console.log(this.state.data);
        // let list = this.props.data;
        // return list.map((each) => {
        //     let squares = this.renderPlantSquare(each);
            return <Row>{this.state.data.map((each) => {return this.renderPlantSquare(each)})}</Row>
    }
}


class PlantGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined, 
            slug: this.props.value
        };
        this.fetchPlant(this.props.value).then((data) => this.setState({data:data}));
        // console.log(this.state);
        
    }

    fetchPlant(plant) {
        console.log(plant);
        fetch(`http://www.localhost:3000/plants/${plant}`)
        .then((response) => {response.json()})
        .then((data) => {
              console.log(data.data);
              return {data: data.data};
         });
    }

    UNSAFE_componentWillMount() {
       
    }

    render() {
        return  <div>
                    <h2 className='results m-5'>Search Results</h2>
                    <Container className="results" name="results">
                       <PlantRow data={this.state.data}/>
                    </Container>
                </div>
    }                        
}


export default PlantGrid;
