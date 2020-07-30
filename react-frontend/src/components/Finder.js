import React from "react";
import { Button, Form } from "react-bootstrap";

const TREFLE_KEY = process.env.REACT_APP_TREFLE_KEY
const apiUrl = "http://trefle.io/api/v1"
class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divisions: [],
      subdivisions: [],
      classes: [],
      subclasses: [],
      orders: [],
      families: [],
      genii: [],
      species: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getDivisions();

  }

  //===================================
  // Event Handlers

  handleChange = function (e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
    return;
  };

  handleSubmit = function () {
    alert("You searched for " + this.state.value);
    return;
  };

  //=====================================
  // API calls to classifications

  getDivisions = function () {
    fetch(`${apiUrl}/divisions?token=${TREFLE_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        res.data.forEach((division) => {
          console.log(division);
          this.setState({
            divisions: [...this.state.divisions, { name: division.name, id: division.id }],
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }



  render() {
    return (
      <Form
        className="finderForm m-5 p-5"
        onSubmit={this.handleSubmit}
        action="./plants/results"
        aria-label="search plants by filter form">
        <Form.Group controlId="formSearchPlants">
          <Form.Label>
            <h1 className="mb-5">Search by Filter:</h1>
          </Form.Label>
          <Form.Control as="select" aria-label="select plant division">
            <option>Select Division ...</option>
            {this.state.divisions.map((division, index) => <option key={index} value="{division.id}">{division.name}</option>)}
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant subdivision">
            <option>Select Subdivision ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant class">
            <option>Select Class ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant subclass">
            <option>Select Subclass ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant order">
            <option>Select Order ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant family">
            <option>Select Family ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant order">
            <option>Select Genus ...</option>
          </Form.Control><br />
          <Form.Control as="select" aria-label="select plant order">
            <option>Select Species ...</option>
          </Form.Control><br />
        </Form.Group >


        <Button className="btn" type="submit" aria-label="submit button">
          Search!
        </Button>
      </Form >
    );
  }
}
export default Finder;