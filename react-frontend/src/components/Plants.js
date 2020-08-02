import React from "react";
import '../App.css';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { Results } from "./Results";

class Plants extends React.Component {

    render() {
        let {slug} = useParams();
        <Switch>   
          <Route path="/:slug" component={Results} exact>
              <Results slug= {slug} />
          </Route>
          <Route path="/:id" component={Bio} exact /> 
        </Switch>
    }
}

export default Plants;