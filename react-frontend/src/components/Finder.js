import React from "react";
import { Button, Form } from "react-bootstrap";
import AuthService from "../services/auth.service";
import PropagateLoader from "react-spinners/PropagateLoader";

const apiUrl = "https://trefle.io";

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionDisabled: true,
      classDisabled: true,
      orderDisabled: true,
      familyDisabled: true,
      genusDisabled: true,
      speciesDisabled: true,
      divisionLoading: false,
      classLoading: false,
      orderLoading: false,
      familyLoading: false,
      genusLoading: false,
      speciesLoading: false,
      divisions: [],
      classes: [],
      orders: [],
      families: [],
      genera: [],
      species: [],
      selectedDivisionId: 0,
      selectedClassId: 0,
      selectedOrderId: 0,
      selectedFamilyId: 0,
      selectedGenusId: 0,
      selectedSpeciesId: 0,
      classPages: "",
      orderPages: "",
      familyPages: "",
      genusPages: "",
      speciesPages: "",
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

  /**************************** EDIT ******************************************/
  // handleSubmit = function (e) {
  //   e.preventDefault();
  //   alert("You searched for " + this.state.selectedSpeciesId);
  //   this.props.history.push(`/plants/species/${this.state.selectedSpeciesId}`);
  //   return;
  // };
  /****************************** EDIT ****************************************/
  
  
  handleSubmit = function () {
    alert("You searched for " + this.state.selectedSpeciesId);

    return;
  };

  onChangeDivision = function (e) {
    console.log(`DEBUG division: ${e.target.value}`);
    this.setState({ selectedDivisionId: parseInt(e.target.value, 10) });
    //clear all following states
    this.setState({
      classes: [],
      orders: [],
      families: [],
      genera: [],
      species: [],
      selectedClassId: 0,
      selectedOrderId: 0,
      selectedFamilyId: 0,
      selectedGenusId: 0,
      selectedSpeciesId: 0,
      classPages: "",
      orderPages: "",
      familyPages: "",
      genusPages: "",
      speciesPages: "",
      classDisabled: true,
      orderDisabled: true,
      familyDisabled: true,
      genusDisabled: true,
      speciesDisabled: true,
    });
    this.getClasses();
  }

  onChangeClass = function (e) {
    console.log(`DEBUG class: ${e.target.value}`);
    this.setState({ selectedClassId: parseInt(e.target.value, 10) });
    //clear all following states
    this.setState({
      orders: [],
      families: [],
      genera: [],
      species: [],
      selectedOrderId: 0,
      selectedFamilyId: 0,
      selectedGenusId: 0,
      selectedSpeciesId: 0,
      orderPages: "",
      familyPages: "",
      genusPages: "",
      speciesPages: "",
      orderDisabled: true,
      familyDisabled: true,
      genusDisabled: true,
      speciesDisabled: true,
    });
    this.getOrders();
  }

  onChangeOrder = function (e) {
    console.log(`DEBUG order: ${e.target.value}`);
    this.setState({ selectedOrderId: parseInt(e.target.value, 10) });
    //clear all following states
    this.setState({
      families: [],
      genera: [],
      species: [],
      selectedFamilyId: 0,
      selectedGenusId: 0,
      selectedSpeciesId: 0,
      familyPages: "",
      genusPages: "",
      speciesPages: "",
      familyDisabled: true,
      genusDisabled: true,
      speciesDisabled: true,
    });
    this.getFamilies();
  }

  onChangeFamily = function (e) {
    console.log(`DEBUG family: ${e.target.value}`);
    this.setState({ selectedFamilyId: parseInt(e.target.value, 10) });
    console.log(this.state.selectedFamilyId);
    //clear all following states
    this.setState({
      genera: [],
      species: [],
      selectedGenusId: 0,
      selectedSpeciesId: 0,
      genusPages: "",
      speciesPages: "",
      genusDisabled: true,
      speciesDisabled: true,
    });
    this.getGenera();
  }

  onChangeGenus = function (e) {
    console.log(`DEBUG genus: ${e.target.value}`);
    this.setState({ selectedGenusId: parseInt(e.target.value, 10) });
    //clear all following states
    this.setState({
      species: [],
      selectedSpeciesId: 0,
      speciesPages: "",
      speciesDisabled: true,
    });
    this.getSpecies();
  }

  onChangeSpecies = function (e) {
    console.log(`DEBUG species: ${e.target.value}`);
    this.setState({ selectedSpeciesId: parseInt(e.target.value, 10) });
    console.log(`selectedSpecies ${this.state.selectedSpeciesId} `)
  }

  //=====================================
  // API calls to classifications
  // GET DIVISION
  getDivisions = function () {
    console.log('DEBUG getDivisions()');
    this.setState({ divisionLoading: true });
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
        //console.log(res);
        this.setState({ divisions: [] });
        res.data.forEach((division) => {
          //console.log(division);
          this.setState({
            divisions: [...this.state.divisions, { name: division.name, id: division.id }],
          });
        });
        this.setState({ divisionLoading: false });
        this.setState({ divisionDisabled: false });
        this.seeState();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // GET CLASSES
  getClasses = async () => {
    console.log('getClasses()');
    this.setState({ classLoading: true });
    try {
      let next = true;
      let page = 1;
      while (next) {
        // eslint-disable-next-line
        let response = await this.reqClasses(page);
        //console.log('get');
        //console.log(response);
        page++;
        if (page > this.state.classPages) next = false;
      }
      this.setState({ classLoading: false });
      this.setState({ classDisabled: false });
      this.seeState();
    } catch (err) {
      console.log(err);
    }
  }

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
      //console.log(`req`);
      this.setState({ classPages: parseInt(data.links.last.match(/\d+$/)[0], 10) });
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

  // GET ORDERS
  getOrders = async () => {
    console.log('getOrders()');
    this.setState({ orderLoading: true });
    try {
      let next = true;
      let page = 1;
      while (next) {
        // eslint-disable-next-line
        let response = await this.reqOrders(page);
        //console.log('get');
        //console.log(response);
        page++;
        if (page > this.state.orderPages) next = false;
      }
      this.setState({ orderLoading: false });
      this.setState({ orderDisabled: false });
      this.seeState();
    } catch (err) {
      console.log(err);
    }
  }

  reqOrders = async (page) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/division_orders?page=${page}`, {
        headers:
        {
          'Content-Type': 'application/html',
          'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
        }
      });
      const data = await response.json();
      //console.log(`req`);
      this.setState({ orderPages: parseInt(data.links.last.match(/\d+$/)[0], 10) });
      data.data.forEach((item) => {
        if (item.division_class && (this.state.selectedClassId === item.division_class.id)) {
          this.setState({
            orders: [...this.state.orders, { name: item.name, id: item.id }],
          })
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GET FAMILIES
  getFamilies = async () => {
    console.log('getFamilies()');
    this.setState({ familyLoading: true });
    try {
      let next = true;
      let page = 1;
      while (next) {
        // eslint-disable-next-line
        let response = await this.reqFamilies(page);
        //console.log('get');
        //console.log(response);
        page++;
        if (page > this.state.familyPages) next = false;
      }
      this.setState({ familyLoading: false });
      this.setState({ familyDisabled: false });
      this.seeState();
    } catch (err) {
      console.log(err);
    }
  }

  reqFamilies = async (page) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/families?page=${page}`, {
        headers:
        {
          'Content-Type': 'application/html',
          'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
        }
      });
      const data = await response.json();
      //console.log(`req`);
      this.setState({ familyPages: parseInt(data.links.last.match(/\d+$/)[0], 10) });
      data.data.forEach((item) => {
        if (item.division_order && (this.state.selectedOrderId === item.division_order.id)) {
          this.setState({
            families: [...this.state.families, { name: item.name, id: item.id }],
          })
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GET GENERA
  getGenera = async () => {
    console.log('getGenera()');
    this.setState({ genusLoading: true });
    try {
      let next = true;
      let page = 1;
      while (next) {
        // eslint-disable-next-line
        let response = await this.reqGenera(page);
        //console.log('get');
        //console.log(response);
        page++;
        //capping pages to 25
        if (page > this.state.genusPages || page >= 25) next = false;
      }
      this.setState({ genusLoading: false });
      this.setState({ genusDisabled: false });
      this.seeState();
    } catch (err) {
      console.log(err);
    }
  }

  reqGenera = async (page) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/genus?page=${page}&filter[family_id]=${this.state.selectedFamilyId}`, {
        // const response = await fetch(`${apiUrl}/api/v1/genus?page=${page}&filter[family_id]=488`, {
        headers:
        {
          'Content-Type': 'application/html',
          'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
        }
      });
      const data = await response.json();
      //console.log(`req`);
      this.setState({ genusPages: parseInt(data.links.last.match(/\d+$/)[0], 10) });
      data.data.forEach((item) => {
        if (item.family && (this.state.selectedFamilyId === item.family.id)) {
          this.setState({
            genera: [...this.state.genera, { name: item.name, id: item.id }],
            // genera: this.state.genera.push({ name: item.name, id: item.id })
          })
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  // GET SPECIES
  getSpecies = async () => {
    console.log('getSpecies()');
    this.setState({ speciesLoading: true });
    try {
      let next = true;
      let page = 1;
      while (next) {
        // eslint-disable-next-line
        let response = await this.reqSpecies(page);
        //console.log('get');
        //console.log(response);
        page++;
        //capping pages to 25
        if (page > this.state.speciesPages || page >= 25) next = false;
      }
      this.setState({ speciesLoading: false });
      this.setState({ speciesDisabled: false });
      this.seeState();
    } catch (err) {
      console.log(err);
    }
  }

  reqSpecies = async (page) => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/plants?page=${page}&filter[genus_id]=${this.state.selectedGenusId}`, {
        headers:
        {
          'Content-Type': 'application/html',
          'Authorization': `Bearer ${AuthService.getCurrentUser().token}`
        }
      });
      const data = await response.json();
      //console.log(`req`);
      this.setState({ speciesPages: parseInt(data.links.last.match(/\d+$/)[0], 10) });
      data.data.forEach((item) => {
        this.setState({
          species: [...this.state.species, { name: item.scientific_name, id: item.id, common_name: item.common_name }],
        })

      });
    } catch (err) {
      console.log(err);
    }
  }

  // DEBUG function
  seeState = () => {
    console.log('this.state');
    console.log(this.state);
  }

  //==============================================
  // RENDER
  render() {
    return (
      <div>
        <div className="loading" style={{ position: 'relative', top: '25%', left: '50%' }}>
          <PropagateLoader
            size={15}
            color={"var(--blue-dark)"}
            loading={this.state.divisionLoading || this.state.classLoading || this.stateorderLoading || this.state.familyLoading || this.state.genusLoading || this.state.speciesLoading}
          />
        </div>
        <Form
          className="finderForm m-5 p-5"
          onSubmit={this.handleSubmit}
          action="./plants/results"
          aria-label="search plants by filter form">
          <Form.Group controlId="filterForm">
            <Form.Label>
              <h1 className="mb-5">Search by Filter:</h1>
            </Form.Label>

            <Form.Control onChange={this.onChangeDivision.bind(this)}
              as="select"
              aria-label="select plant division"
              disabled={this.state.divisionDisabled ? true : false}>
              <option>Select Division ...</option>
              {this.state.divisions.map((division, index) => <option key={index} value={division.id}>{division.name}</option>)}
            </Form.Control >
            <br />

            <Form.Control onChange={this.onChangeClass.bind(this)}
              as="select"
              aria-label="select plant class"
              disabled={this.state.classDisabled ? true : false}>
              <option>Select Class ...</option>
              {this.state.classes.map((clas, index) => <option key={index} value={clas.id}>{clas.name}</option>)}
            </Form.Control><br />

            <Form.Control onChange={this.onChangeOrder.bind(this)}
              as="select"
              aria-label="select plant order"
              disabled={this.state.orderDisabled ? true : false}>
              <option>Select Order ...</option>
              {this.state.orders.map((order, index) => <option key={index} value={order.id}>{order.name}</option>)}
            </Form.Control><br />

            <Form.Control onChange={this.onChangeFamily.bind(this)}
              as="select"
              aria-label="select plant family"
              disabled={this.state.familyDisabled ? true : false}>
              <option>Select Family ...</option>
              {this.state.families.map((family, index) => <option key={index} value={family.id}>{family.name}</option>)}
            </Form.Control><br />

            <Form.Control onChange={this.onChangeGenus.bind(this)}
              as="select"
              aria-label="select plant order"
              disabled={this.state.genusDisabled ? true : false}>
              <option>Select Genus ...</option>
              {this.state.genera.map((genus, index) => <option key={index} value={genus.id}>{genus.name}</option>)}
            </Form.Control><br />

            <Form.Control onChange={this.onChangeSpecies.bind(this)}
              as="select"
              aria-label="select plant species"
              disabled={this.state.speciesDisabled ? true : false}>
              <option>Select Species ...</option>
              {this.state.species.map((plant, index) => <option key={index} value={plant.id}>{plant.name} ({plant.common_name})</option>)}
            </Form.Control><br />
          </Form.Group >


          <Button className="btn" type="submit" aria-label="submit button">
            Search!
        </Button>
        </Form >
      </div >
    );
  }
}
export default Finder;