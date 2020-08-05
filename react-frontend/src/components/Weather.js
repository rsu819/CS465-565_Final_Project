import React from "react";

class Weather extends React.Component {


  UNSAFE_componentWillMount() {
    fetch('http://www.localhost:3000/weather')
    .then((message) => {return message.json()})
    .then((answer) => {return answer})
    .then((object) => {
          let text = object.body;
        return <div>{text}</div>})
    .catch((err) => {console.log(err)})
  }
  
 
  render() {
    return <div></div>
  }
}

export default Weather;
