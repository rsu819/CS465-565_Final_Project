import React from "react";
import "../stylesheets/PlantGrid.css"
import { Container, Row, Col, Button } from "react-bootstrap";

const baseUrl = (process.env.NODE_ENV === 'production') ? "https://plantsplantsplants.herokuapp.com" : "http://localhost:3000";

function Name(props) {
  if (props.name) {
    return <div className="name p-2 text-capitalize"><strong>{props.name}</strong></div>
  }
  else {
    return <div className="name p-2 h6 font-weight-lighter"><em>(common name unlisted)</em></div>
  }

}

class PlantSquare extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(this.props.url);
  }

  render() {
    return <Col className="square p-4" sm={6} md={4}>
      <Name name={this.props.name} />
      <div className="sciName p-2">Scientific Name:<br /> {this.props.sciName}</div>
      <div>
        <Button 
          onClick={this.handleClick}
          className="btn-sm btn-primary mt-2 rounded-0"
          aria-label="link to plant information">
          <strong>Go!</strong></Button>
      </div>
    </Col>
  }
}

function Prev(props) {

  if (props.links.prev) {
    return <Col>
      <Button className="btn mt-4 rounded-0"
        aria-label="link to previous page of results"
        onClick={props.onClick}>
        <strong>Previous Results</strong>
      </Button>
    </Col>
  }
  else {
    return null;
  }

}

function Next(props) {
  if (props.links.next) {
    return <Col>
      <Button className="btn mt-4 rounded-0"
        aria-label="button link to next page of results"
        onClick={props.onClick}>
        <strong>More Results</strong></Button>
    </Col>

  }
  return <Col>
    <Button className="btn disabled mt-4 rounded-0"
      aria-label="end of results">
      <strong>End of Results</strong></Button>
  </Col>
}


class PlantRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      links: {},
      self: "",
      isLoaded: false,
      error: null
    }
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    if (this.state.links.prev) {
      this.setState({
        self: this.state.links.prev,
        isLoaded: false
      })
    }
  }

  handleNextClick() {

    this.setState({
      self: this.state.links.next,
      isLoaded: false
    })
  }


  renderPlantSquare(plant) {
    let image = plant.image_url;
    let name = plant.common_name;
    let slug = plant.common_name;
    let sciName = plant.scientific_name;
    let url = `/plants/${this.props.data}/${plant.id}`;
    return <PlantSquare
      className="plant-square"
      image={image}
      name={name}
      sciName={sciName}
      slug={slug}
      url={url}
      key={plant.id}
      history={this.props.history}
    />
  }

  componentDidMount = async function () {
    try {
      let response = await fetch(`${baseUrl}/plants/${this.props.data}`)
      let results = await response.json();
      this.setState({
        data: results,
        links: results.links,
        isLoaded: true
      })
    }
    catch (error) {
      this.setState({
        isLoaded: true,
        error
      });
    }
  }

  componentDidUpdate = async function (prevProps, prevState) {
    const link = { endpoint: `${this.state.self}` }
    if (prevState.self !== this.state.self) {
      try {
        let response = await fetch(`${baseUrl}/plants/next/`, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          referrerPolicy: "no-referrer",
          body: JSON.stringify(link),
          credentials: "omit"
        });
        let results = await response.json();
        this.setState({
          data: results,
          links: results.links,
          self: results.links.self,
          isLoaded: true
        })
      }
      catch (error) {
        this.setState({
          isLoaded: true,
          error
        })
      }
    }

  }


  render() {
    const { data, links, isLoaded, error } = this.state;
    if (error) {
      return <div>{error.message}</div>
    }
    else if (!isLoaded) {
      return <div>Loading...</div>
    }
    else {
      return <>
        <Row>

          {data.data.map(
            (each) => {
              return this.renderPlantSquare(each)
            })}
        </Row>
        <Row className="newPage mb-5">
          <Prev className="prevBtn" links={links} onClick={this.handlePrevClick} />
          <Next className="nextBtn" links={links} onClick={this.handleNextClick} />
        </Row>

      </>
    }
  }
}


class PlantGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: undefined,
      isLoaded: false,
      error: null
    };
  }

  render() {

    return <div>
      <h2 className="results m-5">Search Results</h2>
      <Container className="results"
        name="results"
        aria-label="search results">
        <PlantRow data={this.props.value} history={this.props.history} />
      </Container>
    </div>
  }
}


export default PlantGrid;
