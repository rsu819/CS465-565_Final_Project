import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Weather from "./components/Weather";
import Finder from "./components/Finder";
import Home from "./components/Home";
// import Results from "./components/Results";
import AuthService from "./services/auth.service";
import PageNotFound from "./components/PageNotFound";

class App extends React.Component {
  componentDidMount() {
    let token = JSON.parse(localStorage.getItem('user'));

    if (token) {
      console.log('we have a token!');
      console.log(token.token);
      console.log(token.expiration);
      let dateNow = new Date().getTime();
      let expiration = new Date(token.expiration.match(/\d+/)[0] * 1);
      if (expiration < dateNow) {
        AuthService.logout();
        AuthService.login();
      }
    }
    else {
      console.log('no token );');
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
            {/* <Route path="/plants" component={Results} exact /> */}
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