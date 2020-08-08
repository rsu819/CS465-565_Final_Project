import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Weather(props) {
  const [zip, setZip] = useState("");
  const [isActive, setActive] = useState();
  const [days, setDays] = useState([]);

  const handleClick = (e) => {
    if (validZip() === true) {
      setActive(true);
      getWeatherByZip();
    } else {
      setActive(false);
    }
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

  const getWeatherByZip = async () => {
    try {
      let response = await fetch(`http://localhost:3000/weather/${zip}`);
      let json = await response.json();
      console.log(json);
      let newState = []
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
      setDays(newState);
      // console.log(days);
    } catch (err) {
      console.log(err);
    }
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
      <br />
      {isActive ? (<WeatherResults zip={zip} days={days} />) : (<div />)}
    </div >
  );
}

function WeatherResults(props) {

  useEffect(() => {
    console.log('WEATHERRESULTS useEffect');
    console.log(`props.zip: ${props.zip}`);
    console.log(`props.days:`);
    console.log(props.days);
    // props.days.forEach(x => {
    //   console.log(x.data);
    // })
  });


  return (
    <>
      <h2 className="m-4">Forecast for {props.zip}</h2>
      <Container fluid>
        <Row className="justify-content-md-center">
          {props.days.map((day, index) => {
            return (
              <Col xs lg="2" key={index}>
                <WeatherDay key={index} data={day.date} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}


function WeatherDay(props) {
  useEffect(() => {
    console.log(props.data);
  });

  return (
    <>
      hi {props.data}
    </>
  )



}
export default Weather;