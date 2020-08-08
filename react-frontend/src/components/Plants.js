import React from "react";
import '../App.css';
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import PlantGrid from "./PlantGrid";
import Bio from "./Bio";

function Plants() {
    let { url } = useRouteMatch();
    let { slug } = useParams();
    console.log('SLUG: ' + slug);
    return <Switch> 
              <Route path='/:slug'>
                <PlantGrid value={slug}/>
              </Route>
              <Route path={`${url}/:id`}>
                <Bio/>
              </Route> 
              
            </Switch>
}

export default Plants;