import React from "react";
import "./App.css";
import moment from 'moment';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Weather from "./components/Weather";
import Finder from "./components/Finder";
import Home from "./components/Home";
import Plants from "./components/Plants";
import AuthService from "./services/auth.service";
import PageNotFound from "./components/PageNotFound";

class App extends React.Component {
  componentDidMount() {
    let token = JSON.parse(localStorage.getItem('user'));
    // console.log(token);
    if (token !== null) {
      // console.log('we have a token!');
      let dateNow = new Date();
      let expiration = new Date(moment(token.expiration, "MM-DD-YYYY hh:mm"));
      if (expiration < dateNow) {
        AuthService.logout();
        AuthService.login();
      }
    }
    else {
      // console.log('no token );');
      AuthService.login();
    }
  }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home" component={Home} exact />
            <Route path="/plants/:slug" component={Plants} />
            <Route path="/finder" component={Finder} exact />
            <Route path="/weather" component={Weather} exact />
            <Route path="/about" component={About} exact />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;