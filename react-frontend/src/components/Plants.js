import React from "react";
import '../App.css';
import { Route, Switch, useParams } from "react-router-dom";
import PlantGrid from "./PlantGrid";


function Plants() {
    let {slug} = useParams();
    console.log(slug)
    //console.log('Plants hit');
    return <Switch> 
      {/* <Route path=":slug/:id" component={Bio} exact />  */}
      <Route path="/:slug">
        <PlantGrid value={slug}/>
      </Route>
    </Switch>
}

export default Plants;