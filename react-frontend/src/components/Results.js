import React from "react";
import '../App.css';
import { Row, Col, Container } from "react-bootstrap";
import fetch from "node-fetch";
import { useParams } from "react-router-dom";

// //the props passed in should be att with JSON object fields
class PlantSquare extends React.Component {
    // contructor(props) {
    //     super(props);
    // }

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
        return <Row>
            {this.props.data.map((plant) => {
                console.log(plant);
                return this.renderPlantSquare(plant)
            })}
        </Row>
    }
}


class Results extends React.Component {
    // constructor(props) {
    //     super(props);
    //     //let { slug } = useParams();
    //     this.state = {
    //         slug: this.props.slug
    //     }
    

    fetchResults() {
       let {slug} = useParams();
       console.log(slug);
        fetch(`http://localhost:3000/${slug}`, {
            method: 'GET'
        })
        .then(data => {return data})
        .catch((err) => {console.log(err)})
    };

    componentDidMount() {
        this.fetchResults()
        .then((results) => {
            console.log(results);
            return <PlantRow data={results} />
        })
        
    }

    render() {
        return <div>
                <h2 className='results m-5'>Search Results</h2>
                <Container className="results" name="results">
                     <PlantRow/>
                </Container>
            </div>
    }
}

export default Results;
