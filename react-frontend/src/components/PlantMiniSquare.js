import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../stylesheets/Bio.css";
import { useRouteMatch } from "react-router-dom";

const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:3000";


class PlantMiniSquare extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        plantId: undefined,
        value: ""
      }
      this.handleClick = this.handleClick.bind(this);
    }
  
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  
    handleClick(event) {
      console.log(this.state.family_name);
      this.props.history.push(`/plants/${event.target.value}/${event.target.id}`);
      this.props.onClick(`/plants/${event.target.value}/${event.target.id}`);
    }

    componentDidMount() {
      
    }
  
    render() {
      let squares = [];
      let length = this.props.family.length;
      console.log(length);
      if (this.props.family == null) {
      return (<Col>
                <div className="notFound">
                  <span>No other plants in this family exist <br />
                              on this database <br /> explore more varieties with our <br /></span>
                  <img src={require("../images/cactusIcon.png")} alt="cactus icon"></img>
                  <Button value={this.props.family.common_name} href="../finder"><u>Plant Finder!</u></Button>
              </div>
        </Col>)
    } else if (length < 6) {
          for (let i = this.getRandomInt(5); i < length; ((i + 1) % 5)) {
            
            if (this.props.family[i].common_name !== this.props.skip) {
              squares.push(<Col>
                <img src={require('../images/leafimg.jpeg')} alt='plant icon'></img>
                <div className="commonName p-2">{this.props.family[i].common_name}</div>
                <div className="scientificName p-2">{this.props.family[i].scientific_name}</div>
                <Button className="btn btn-sm" value={this.props.family[i].common_name} id={this.props.family[i].id} onClick={this.handleClick}>Go!</Button>
              </Col>)
            }
          }
    } else {
      let i = this.getRandomInt(length);
      let j = 0
      do {
        console.log(i);
        if (this.props.family[i].common_name !== this.props.skip) {
          //let path = `../${props.family[i].common_name}/${props.family[i].id}`;
          squares.push(<Col>
            <img src={require('../images/leafimg.jpeg')} alt='plant icon'></img>
            <div>{this.props.family[i].common_name}</div>
            <div>{this.props.family[i].scientific_name}</div>
            <Button className="btn btn-sm" value={this.props.family[i].common_name} id={this.props.family[i].id} onClick={this.handleClick}>Go!</Button>
          </Col>)
        }
        i = (i + 1) % length;
        j++;
      } while (j < 5);
    }
    return squares;
  }
}

export default PlantMiniSquare;

