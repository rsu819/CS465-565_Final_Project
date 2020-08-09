import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";

function Weather(props) {
  const [zip, setZip] = useState("");
  const [isActive, setActive] = useState();
  const [data, setData] = useState();

  const handleClick = (e) => {
    e.preventDefault();
    if (validZip() === true) {
      setActive(true);
      getWeatherByZip();
    } else {
      setActive(false);
    }
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
      setData(json);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1 style={{ display: 'none' }}>Weather Page</h1>
      <Form
        id="searchform"
        className="text-center"
        action="">
        <Form.Group controlId="formSearchWeather">
          <Form.Label className="title mt-5 p-5">
            Enter ZIP code:
              </Form.Label>
          <Form.Control
            style={{ marginLeft: 'auto', marginRight: 'auto' }}
            className="w-50 text-center"
            type="text"
            value={zip}
            onChange={e => handleChange(e)}
            placeholder="e.g. 97229"
            aria-label="enter search for weather by zipcode"
            required
          />
        </Form.Group>


        <Button className="btn" type="click" onClick={handleClick} variant="primary" aria-label="search button for weather form">
          Search!
        </Button>


      </Form>
      <br />
      {isActive ? (<WeatherResults zip={zip} data={data} />) : (<div />)}
    </div >
  );
}

function WeatherResults(props) {
  const [loaded, setLoad] = useState(false);
  const [validZip, setValidZip] = useState(false);
  const [temperature, setTemperature] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [humidity, setHumidity] = useState();
  const [name, setName] = useState();
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (props.data) {
      if (props.data.message !== 'valid') {
        setValidZip(false);
        setLoad(false);
      } else {
        setTemperature(convertToF(props.data.main.temp));
        setFeelsLike(convertToF(props.data.main.feels_like));
        setMinTemp(convertToF(props.data.main.temp_min));
        setMaxTemp(convertToF(props.data.main.temp_max));
        setHumidity(props.data.main.humidity);
        setName(props.data.name);
        setIcon(props.data.weather[0].icon);
        setLoad(true);
        setValidZip(true);
      }
    }

  }, [props.zip, props.data]);

  const convertToF = (x) => {
    return Math.round(1.8 * (parseInt(x, 10) - 273.15) + 32);
  }


  if (!validZip) {
    return <div> Zip code not found!</div>
  }
  else {
    return (
      <>
        <h2 className="m-4">Weather in {name}: </h2>
        <Container fluid>
          <Row className="justify-content-md-center">
            {!loaded ? (<p>Loading...</p>) : (

              <Col xs lg="4">
                <Image
                  className="w-15"
                  src={require(`../images/icons/${icon}.png`)}
                  alt="weather icon"
                  fluid
                />
                <div className="mt-4">
                  <p> Current temperature: {temperature} &#176; F</p>
                  <p> Feels like: {feelsLike} &#176; F</p>
                  <p> Minimum temperature: {minTemp} &#176; F</p>
                  <p> Maximum temperature: {maxTemp} &#176; F</p>
                  <p> Humidity: {humidity}%</p>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </>
    )
  }
}



export default Weather;