import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import jean from "../images/jean_choi.png";
import robin from "../images/robin_su.png";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
    // this.callAPI(); // if getting rid of componentWillMount()
  }

  callAPI() {
    fetch("/about")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("DEBUG res:", res);
        res.data.forEach((plant) => {
          console.log(plant);
          this.setState({
            apiResponse: [...this.state.apiResponse, { name: plant.common_name, id: plant.id }],
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // life cycle hook: automatically executes on first render
  UNSAFE_componentWillMount() {
    console.log("DEBUG About componentWillMount");
    this.callAPI();
  }

  render() {
    return (
      <div>
        <p>TEST response body: </p>
        <ul>
          {this.state.apiResponse.map((plant, index) => <li key={index}>{plant.name}</li>)}
        </ul>
        < h1 className="m-5" > About</h1>
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs lg="4">
              <Image
                className="w-75"
                src={jean}
                alt="Jean Choi isometric name"
                fluid
              />
              <div className="mt-4">
                <p>Loves to eat</p>
              </div>
            </Col>
            <Col xs lg="4">
              <Image
                className="w-75"
                src={robin}
                alt="Robin Su isometric name"
                fluid
              />
              <div className="mt-4">
                <p>Is cool</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
