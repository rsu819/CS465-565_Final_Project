import React from "react";
import '../App.css';
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import Results from "./Results";

function Plants() {
    //let match = useRouteMatch();
    let {slug} = useParams()
    return <Switch>   
      <Route path="/:slug" component={Results} exact>
          <Results slug={slug} />
      </Route>
      {/* <Route path="/:id" component={Bio} exact />  */}
    </Switch>

}

export default Plants;