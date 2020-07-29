import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Plants from "./components/Plants";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/home" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path='/plants' component={Plants} exact />
        </Switch>
      </BrowserRouter>
      {/* <h1 className="m-2">hello world!</h1> */}
    </div>
  );
}

export default App;