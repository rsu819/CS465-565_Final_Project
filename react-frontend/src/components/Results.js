import React from "react";
import '../App.css';
import { Row, Col, Container } from 'react-bootstrap';

function PlantSquare(props){
    let image = props.image_url;
    let name = props.name; 
    let slug = props.common_name;
    let url = '/plants/'+slug;
    return (
        <Col xs={6} md={4}>
            <img href={image} alt={name}/>
            <div>Name: {name}</div>
            <div>
                <a href={url}>PLANT NAME</a>
            </div>
        </Col>
    );
      
};


class Results extends React.Component {
    render() {
        return (
        <Container>
            <Row>
                <Col>
                 
                </Col>
            </Row>
        </Container>
        );
    }
}

export default Results;
