import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Weather from "./components/Weather";
import Finder from "./components/Finder";
import Home from "./components/Home";
//import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} exact />
          <Route path="/plants/results" component={Finder} exact />
          <Route path="/finder" component={Finder} exact />
          <Route path="/weather" component={Weather} exact />
          <Route path="/about" component={About} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;