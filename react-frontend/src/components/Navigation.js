import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar classsName="navbar" expand="md">
        <Navbar.Brand href="#home">PlantsPlantsPlants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="plant-finder">Plant Finder</Nav.Link>
            <Nav.Link href="weather">Weather</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
