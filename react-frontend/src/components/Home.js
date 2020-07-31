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

  handleSubmit = function() { fetch("/plants/results", {method: 'GET', headers: {'Content-Type': 'application/json'}})
    .then((response) => {console.log(response)})
    .then( (data) => {console.log(data)})
    .catch((err) => {console.log(err);});
  };

  render() {
  //   return <Form className="searchform" onSubmit={this.handleSubmit} action="/home">
  //     <Form.Group controlId="formSearchPlants">
  //       <Form.Label className="title mt-5 p-5">Enter plant to care for:</Form.Label>
  //       <Form.Control className="search" 
  //               type="text" 
  //               onChange={this.handleChange}
  //               placeholder={this.state.results}
  //               aria-label="enter search for plants" 
  //               required
  //       />
  //     </Form.Group>
  //     <Button className="btn" type="submit" variant="primary">Search!</Button>
  //   </Form>
         return <Button className="btn" type="Enter" variant="primary" onClick={this.handleSubmit}>Search!</Button>
   }
};

  export default Home;