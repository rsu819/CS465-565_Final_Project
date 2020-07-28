import React from "react";
import '../App.css';
import '../public/stylesheets/Home.css';
import { Button, Form } from "react-bootstrap";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = function() {
    this.setState({value: e.target.value});
    console.log(this.state.value);
    return;
  }

  handleSubmit = function() {
    alert('You searched for ' + this.state.value);
    return;
  }

  render() {
    return <Form className="searchform" onSubmit={this.handleSubmit} action="./plants/results">
      <Form.Group controlId="formSearchPlants">
        <Form.Label className="title mt-5 p-5">Enter plant to care for:</Form.Label>
        <Form.Control className="search" 
                type="text" 
                onChange={this.handleChange}
                placeholder="search any plant..." 
                aria-label="enter search for plants" 
                required
        />
      </Form.Group>
      <Button className="btn" type="submit" variant="primary" >Search!</Button>
    </Form>
  }
}
export default Home;