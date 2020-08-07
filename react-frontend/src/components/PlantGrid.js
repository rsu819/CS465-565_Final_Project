import React from "react";
//import '../App.css';
import '../stylesheets/PlantGrid.css'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import basil from './testResult'
//the props passed in should be attr with JSON object fields


function Name(props) {
    if (props.name) {
        return   <div className="name p-2 text-capitalize"><strong>{props.name}</strong></div>
    }
    else {
        return <div className="name p-2 h6 font-weight-lighter"><em>(common name unlisted)</em></div>
    }

}

class PlantSquare extends React.Component {
 
    render() {
    return <Col className='square p-4' sm={6} md={4}>
            <Name name={this.props.name}/>
            <div className="sciName p-2">Scientific Name:<br/> {this.props.sciName}</div>
            <div>
                <Button href={this.props.url} className='btn-sm btn-primary mt-2 rounded-0'><strong>Go!</strong></Button>
            </div>
        </Col>
    }
}


class PlantRow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.data)
        this.state = {
            data: [],
            isLoaded: false,
            error: null
        }
    }

    renderPlantSquare(plant) {
        let image = plant.image_url;
        let name = plant.common_name; 
        let slug = plant.common_name;
        let sciName = plant.scientific_name;
        let url = `/plants/${this.props.data}/${plant.id}`;
        return <PlantSquare
                    className="plant-square"
                    image={image}
                    name={name}
                    sciName={sciName}
                    slug={slug}
                    url={url}
                    key={plant.id}
                />
    }

    componentDidMount = async function() {
        try {
            //let response = await fetch(`http://www.localhost:3000/plants/${this.props.data}`)
            //let results = await response.json();
            //console.log(results);
            this.setState({
                data: basil,
                isLoaded: true 
            })
            }
            catch (error) {
                this.setState({
                    isLoaded: true,
                    error
            });
        }
    }
    

    render() {
        const { data, isLoaded, error } = this.state;
        if (error) {
            return <div>{error.message}</div>
        }
        else if (!isLoaded) {
            return <div>Loading...</div>
        }
        else {
            return <Row>{data.data.map(
                (each) => {
                    return this.renderPlantSquare(each)
                })}
                </Row>
        }
    }
}


class PlantGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            isLoaded: false,
            error: null
        };
    console.log(this.props.value);
    }

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
