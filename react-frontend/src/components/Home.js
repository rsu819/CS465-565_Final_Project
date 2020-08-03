import React from "react";
import "../stylesheets/Home.css";
import { Button, Form } from "react-bootstrap";
import { Route } from "react-router-dom";
import Results from "./Results";
//import fetch from "node-fetch";


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
    return <Route 
            path={`/plants/${this.state.value}`} 
            query={this.state.value} 
            component={Results} exact/>
    //this.props.history.push(`/plants/${this.state.value}`);
    // fetch('http://localhost:3000/plants/results', { 
    //   method: 'POST', 
    //   body: {'query': this.state.value}
    // })
    // .then((keyword) => {console.log('result from click' + keyword)})
    // .catch((err) => {console.log(err)});
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