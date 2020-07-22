import React from "react";
import "./Navbar.css";

const MenuItems = [
  {
    title: "Home",
    url: "home",
    cName: "nav-link",
  },
  {
    title: "Plant Finder",
    url: "plant-finder",
    cName: "nav-link",
  },
  {
    title: "Weather",
    url: "weather",
    cName: "nav-link",
  },
  {
    title: "About",
    url: "about",
    cName: "nav-link",
  },
];

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar p-3">
        <h1 className="navbar-logo h2">PlantsPlantsPlants</h1>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li className="m-0" key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
