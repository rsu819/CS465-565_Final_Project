import React from "react";
import '../App.css';
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import PlantGrid from "./PlantGrid";
import Bio from "./Bio";

function Plants() {
    let { url } = useRouteMatch();
    let { slug } = useParams();
    console.log('path: ' +url );
    return <Switch> 
              <Route path={`${url}/:id`} render={(props) => (<Bio {...props}/>)} />
              <Route path='/:slug' render={(props) => (<PlantGrid value={slug} {...props}/>)} /> 
            </Switch>
}

export default Plants;
