// import React from "react";
// import { Form, Button } from "react-bootstrap";

// class Weather extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { zip: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = function (e) {
//     this.setState({ zip: e.target.value });
//     console.log(this.state.zip);
//     return;
//   };

//   handleSubmit = function (e) {
//     if (!this.state.zip.match(/^\d{5}$/)) {
//       document.getElementById("searchform").reset();
//       alert("Please enter a 5 digit ZIP code!");
//     } else {
//       alert("You searched for " + this.state.zip);
//     }
//     e.preventDefault();
//   }
//   render() {
//     return (
//       // <div>
//       //   <h1 className="m-5">Weather coming soon...</h1>
//       // </div>

//       <div>
//         <h1 className="m-5">Weather</h1>
//         <Form
//           id="searchform"
//           className="text-center"
//           onSubmit={this.handleSubmit}>
//           <Form.Group controlId="formSearchWeather">
//             <Form.Label column="lg" lg={2}>
//               Enter ZIP code:
//               </Form.Label>
//             <Form.Control
//               style={{ marginLeft: 'auto', marginRight: 'auto' }}
//               className="w-50 text-center"
//               type="text"
//               value={this.state.zip}
//               onChange={this.handleChange}
//               placeholder="e.g. 97229"
//               aria-label="enter search for weather by zipcode"
//               required
//             />
//           </Form.Group>


//           <Button className="btn" type="submit" variant="primary" aria-label="search buttton for weather form">
//             Search!
//           </Button>
//         </Form>
//       </div >
//     );
//   }
// }

// export default Weather;


import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Weather(props) {
  const [zip, setZip] = useState("");
  const [isActive, setActive] = useState();

  const handleClick = (e) => {
    if (validZip() === true) {
      setActive(true);
    } else {
      setActive(false);
    }
    // console.log(`zip: ${zip}`);
    // console.log(`isActive: ${isActive}`);
    e.preventDefault();
  }

  const validZip = () => {
    if (!zip.match(/^\d{5}$/)) {
      alert("Please enter a 5 digit ZIP code!");
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setZip(e.target.value);
    setActive(false);
  }

  return (
    <div>
      <h1 style={{ display: 'none' }}>Weather Page</h1>
      <Form
        id="searchform"
        className="text-center">
        <Form.Group controlId="formSearchWeather">
          <Form.Label className="title mt-5 p-5">
            Enter ZIP code:
              </Form.Label>
          <Form.Control
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
            className="w-50 text-center"
            type="text"
            value={zip}
            // onChange={e => setZip(e.target.value)}
            onChange={e => handleChange(e)}
            placeholder="e.g. 97229"
            aria-label="enter search for weather by zipcode"
            required
          />
        </Form.Group>


        <Button className="btn" type="button" onClick={handleClick} variant="primary" aria-label="search buttton for weather form">
          Search!
        </Button>


      </Form>
      {isActive ? (<WeatherResults zip={zip} />) : (<div />)}
    </div >
  );
}

function WeatherResults(props) {
  useEffect(() => {
    getWeatherByZip();
    console.log(days);
  });
  const [days, setDays] = useState([]);

  const getWeatherByZip = async () => {
    try {
      let response = await fetch(`http://localhost:3000/weather/${props.zip}`);
      let json = await response.json();
      console.log(json);
      let newState = [];
      json.data.forEach((x) => {
        let found = newState.find(item => item.date === x.date);
        //if days doesn't have, create new array elem and push obj
        if (!found) {
          newState.push({
            date: x.date,
            data: [x]
          });
        } else {
          //if days does exist, push obj
          found.data.push(x)
        }

      });
      setDays(days.push(newState));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h2 className="m-4">5-Day Forecast for {props.zip}</h2>
      <Container fluid>
        <Row className="justify-content-md-center">
          {/* {days ? (<p>{days}</p>) : (<p>no days</p>)} */}
          {days.map((day, index) => {
            return (
              <Col xs lg="2" key={index}>
                <WeatherDay key={index} data={days} />
              </Col>
            )
          })}
          {days.map((day) => (
            <li>day</li>
          ))}

        </Row>
      </Container>
    </>
  )
}


function WeatherDay(props) {

  return (
    <>
      hi {props.data}
    </>
  )



}
export default Weather;