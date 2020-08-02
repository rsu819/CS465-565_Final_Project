import React from "react";
import '../stylesheets/Home.css';
import { Button, Form } from "react-bootstrap";
import fetch from "node-fetch";


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

  handleSubmit = function() {
    console.log(this.state.value)
    fetch('http://localhost:3000/plants/results', { 
      method: 'POST', 
      body: {'query': this.state.value}
    })
    .then((keyword) => {console.log('result from click' + keyword)})
    .catch((err) => {console.log(err)});
  }


  render() {
    return <Form className="searchform" action="/plants">
      <Form.Group controlId="searchPlants">
        <Form.Label className="title mt-5 p-5">Enter plant to care for:</Form.Label>
        <Form.Control className="search" 
                type="text" 
                name="search"
                placeholder="search any plant..."
                onChange={this.handleChange}
                aria-label="enter search for plants" 
                required
        />
      </Form.Group>
      <Button className="btn" type="submit" variant="primary" onClick={this.handleSubmit}>Search!</Button>
    </Form>
   }
};

  export default Home;