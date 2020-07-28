import React from "react";
import '../App.css';
import '../stylesheets/Home.css';
import { Button, Form } from "react-bootstrap";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = function() {
    alert('You searched for ' + this.state.value);
    return;
  }

  handleChange = function(e) {
    this.setState({value: e.target.value});
    console.log(this.state.value);
    return;
  }

  render() {
    return <Form className="searchform" >
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
      <Button className="btn" type="submit" variant="primary" onClick={this.handleClick}>Search!</Button>
    </Form>
  }
}
export default Home;