import React from "react";
import { Button, Form } from "react-bootstrap";

const apiUrl = "https://trefle.io/api/v1";

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divisions: [],
      classes: [],
      subclasses: [],
      orders: [],
      families: [],
      genii: [],
      species: [],
      selectedDivisionId: 0,
      selectedClassId: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.getJWT();
  }

  componentDidMount() {
    // const response = this.getJWT();
    // console.log(response);
    //this.getDivisions();

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

  onChangeDivision = function (e) {
    console.log(`DEBUG division: ${e.target.value}`);
    this.setState({ selectedDivisionId: e.target.value });
    this.getClasses();
    //clear all following states
    this.setState({ classes: [] });
  }

  onChangeClass = function (e) {
    console.log(`DEBUG class: ${e.target.value}`);
    this.setState({ selectedClassId: e.target.value });
    //clear all following states
  }

  //=====================================
  // API calls to classifications

  getJWT = function (res, req) {
    // try {
    //   const response = await fetch("/finder");
    //   const json = await response.json();
    //   console.log(json);
    // } catch (err) {
    //   console.log(err);
    // }
    fetch("/about", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        return res;
      })
      .then((res) => {
        console.log("DEBUG res:", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getDivisions = function () {
    console.log('DEBUG getDivisions()')
    fetch(`${apiUrl}/divisions?token=${process.env.REACT_APP_TREFLE_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        //clear existing data
        this.setState({ divisions: [] });
        res.data.forEach((division) => {
          //console.log(division);
          this.setState({
            divisions: [...this.state.divisions, { name: division.name, id: division.id }],
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getClasses = function () {
    console.log('DEBUG getClasses()')
    fetch(`${apiUrl}/division_classes?token=${process.env.REACT_APP_TREFLE_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ classes: [] });
        res.data.forEach((clas) => {
          console.log(clas);
          if (clas.division && this.state.selectedDivisionId === clas.division.id)
            this.setState({
              classes: [...this.state.classes, { name: clas.name, id: clas.id }],
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
        <Form.Group controlId="filterForm">
          <Form.Label>
            <h1 className="mb-5">Search by Filter:</h1>
          </Form.Label>
          <Form.Control onChange={this.onChangeDivision.bind(this)} as="select" aria-label="select plant division">
            <option>Select Division ...</option>
            {this.state.divisions.map((division, index) => <option key={index} value={division.id}>{division.name}</option>)}
          </Form.Control ><br />
          <Form.Control onChange={this.onChangeClass.bind(this)} as="select" aria-label="select plant class">
            <option>Select Class ...</option>
            {this.state.classes.map((clas, index) => <option key={index} value={clas.id}>{clas.name}</option>)}
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