import React from "react";
import '../App.css';
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import PlantGrid from "./PlantGrid";
import Bio from "./Bio";

function Plants() {
    let { url } = useRouteMatch();
    let { slug } = useParams();
    console.log(slug);
    return <Switch> 
      <Route path={`${url}/:id`}>
        <Bio/>
        </Route> 
      <Route path='/:slug'>
        <PlantGrid value={slug}/>
      </Route>
    </Switch>
}

export default Plants;