import React from "react";
import "../stylesheets/Home.css";
import { Button, Form } from "react-bootstrap";

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ""};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange = function(e) {
    this.setState({value: e.target.value});
    console.log(this.state.value);
    return;
  }

  handleSubmit = function(e) {
    e.preventDefault();
    this.props.history.push(`/plants/${this.state.value}`);
  }


  render() {
    return <Form className="searchform" onSubmit={this.handleSubmit}>
      <Form.Group controlId="searchPlants">
        <Form.Label className="title mt-5 p-5">Enter plant to care for:</Form.Label>
        <Form.Control className="search" 
                type="text" 
                name="search"
                placeholder="search any plant..."
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="enter search for plants" 
                required
        />
      </Form.Group>
      <Button className="btn" type="submit" variant="primary">Search!</Button>
    </Form>
   }
};

  export default Home;