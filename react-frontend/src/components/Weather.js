import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Container, Row, Col, Image, Form, Button } from "react-bootstrap";
// import i01d from "../images/icons/01d.png";
// import i01n from "../images/icons/01n.png";
// import i02d from "../images/icons/02d.png";
// import i02n from "../images/icons/02n.png";
// import i03d from "../images/icons/03d.png";
// import i03n from "../images/icons/03n.png";
// import i04d from "../images/icons/04d.png";
// import i04n from "../images/icons/04n.png";
// import i09d from "../images/icons/09d.png";
// import i09n from "../images/icons/09n.png";
// import i10d from "../images/icons/10d.png";
// import i10n from "../images/icons/10n.png";
// import i11d from "../images/icons/11d.png";
// import i11n from "../images/icons/11n.png";
// import i13d from "../images/icons/13d.png";
// import i13n from "../images/icons/13n.png";
// import i50d from "../images/icons/50d.png";
// import i50n from "../images/icons/50n.png";

function Weather(props) {
  const [zip, setZip] = useState("");
  const [isActive, setActive] = useState();
  const [data, setData] = useState();

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


        <Button className="btn" type="button" onClick={handleClick} variant="primary" aria-label="search button for weather form">
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
  const [temperature, setTemperature] = useState();
  const [feelsLike, setFeelsLike] = useState();
  const [minTemp, setMinTemp] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [humidity, setHumidity] = useState();
  // eslint-disable-next-line
  const [pressure, setPressure] = useState();

  const [name, setName] = useState();
  // eslint-disable-next-line
  const [icon, setIcon] = useState();

  useEffect(() => {
    console.log('WeatherResults useEffet');
    console.log(`props.zip: ${props.zip}`);
    console.log(`props.data:`);
    console.log(props.data);
    setLoad(true);
    if (props.data) {
      setTemperature(convertToF(props.data.main.temp));
      setFeelsLike(convertToF(props.data.main.feels_like));
      setMinTemp(convertToF(props.data.main.temp_min));
      setMaxTemp(convertToF(props.data.main.temp_max));
      setHumidity(props.data.main.humidity);
      setPressure(props.data.main.pressure);
      setName(props.data.name);
      setIcon('i' + props.data.weather[0].icon);

    }
  }, [props.zip, props.data]);

  const convertToF = (x) => {
    return Math.round(1.8 * (parseInt(x, 10) - 273.15) + 32);
  }


  return (
    <>
      <h2 className="m-4">Weather in {name}: </h2>
      <Container fluid>
        <Row className="justify-content-md-center">
          {!loaded ? (<p>Loading...</p>) : (

            <Col xs lg="4">
              {/* <Image
                className="w-15"
                src={`${icon}`}
                alt="weather icon"
                fluid
              /> */}
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



export default Weather;