import React from "react";
import { Button, Form } from "react-bootstrap";
import AuthService from "../services/auth.service";

const apiUrl = "https://trefle.io";
const apiClassUrl = (page) => `${apiUrl}/api/v1/division_classes?page=${page}`;

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
      classPages: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    console.log(AuthService.getCurrentUser().token);
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

  onChangeDivision = function (e) {
    console.log(`DEBUG division: ${e.target.value}`);
    this.setState({ selectedDivisionId: parseInt(e.target.value, 10) });
    this.getClasses(`${apiUrl}/api/v1/division_classes`);
    //clear all following states
    this.setState({ classes: [] });
  }

  onChangeClass = function (e) {
    console.log(`DEBUG class: ${e.target.value}`);
    this.setState({ selectedClassId: parseInt(e.target.value, 10) });
    //clear all following states
  }

  //=====================================
  // API calls to classifications
  getDivisions = function () {
    console.log('DEBUG getDivisions()')
    fetch(`${apiUrl}/api/v1/divisions`, {
      headers:
      {
        'Content-Type': 'application/html',
        'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
      }
    })
      .then((res) => res.json())
      .then((res) => {
        //clear existing data
        console.log(res);
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

  // getClasses = function () {
  //   fetch(`${apiUrl}/division_classes`, {
  //     headers:
  //     {
  //       'Content-Type': 'application/html',
  //       'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
  //     }
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       //clear existing data
  //       console.log(res);
  //       this.setState({ classes: [] });
  //       res.data.forEach((item) => {
  //         //console.log(clas);
  //         if (item.division && (this.state.selectedDivisionId === item.division.id)) {
  //           console.log(item);
  //           this.setState({
  //             classes: [...this.state.classes, { name: item.name, id: item.id }],
  //           });
  //         }
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  reqClasses = async (page) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/division_classes?page=${page}`, {
        headers:
        {
          'Content-Type': 'application/html',
          'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
        }
      });
      const data = await response.json();
      console.log(`req`);
      this.setState({ classPages: parseInt(data.links.last.slice(-1), 10) });
      data.data.forEach((item) => {
        if (item.division && (this.state.selectedDivisionId === item.division.id)) {
          this.setState({
            classes: [...this.state.classes, { name: item.name, id: item.id }],
          })
        }
      })
    } catch (err) {
      console.log(err);
    }
  }
  getClasses = async () => {
    try {
      let next = true;
      let page = 1;
      while (next) {
        let response = await this.reqClasses(page);
        console.log('get');
        console.log(response);
        page++;
        if (page > this.state.classPages) next = false;
      }
    } catch (err) {
      console.log(err);
    }
  }

  // DEBUG function
  seeState = () => {
    console.log(this.state);
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