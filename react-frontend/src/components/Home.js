import React from "react";
import '../stylesheets/Home.css';
import { Button, Form } from "react-bootstrap";
//import { Redirect } from 'react-router-dom';
//import fetch from "node-fetch";

class Home extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {value: ""};

  //  //this.handleChange = this.handleChange.bind(this);
  //  //this.handleSubmit = this.handleSubmit.bind(this);
  // }


  render() {
    return <Form className="searchform" onSubmit={this.handleSubmit} action="http://localhost:3000/plants/results">
      <Form.Group controlId="formSearchPlants">
        <Form.Label className="title mt-5 p-5" for="search">Enter plant to care for:</Form.Label>
        <Form.Control className="search" 
                id="search"
                type="text" 
                name="search"
                placeholder="search any plant..."
                aria-label="enter search for plants" 
                required
        />
      </Form.Group>
      <Button className="btn" type="submit" variant="primary">Search!</Button>
    </Form>
   }
};

  export default Home;