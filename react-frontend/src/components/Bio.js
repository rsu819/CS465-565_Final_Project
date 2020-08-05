import React from "react";
import "../stylesheets/Home.css";
//import { Button, Form } from "react-bootstrap";
import { useParams, useRouteMatch } from "react-router-dom";


class PlantInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            common_name: "",
            scientific_name: "",
            main_species: {
                foliage: {
                    texture: "",
                    leaf_retention: "",
                },
                fruit: {
                    color: ""
                },
                flower: {
                    color: ""
                },
                specifications: {
                    growth_habit: "",
                    average_height: null,
                    shape_and_orientation: "",
                },
                growth: {
                    light: "",
                    atmospheric_humidity: "",
                    minimum_precipitation: null,
                    maximum_precipitation: null,
                    minimum_temperature: {
                        deg_f: null
                    },
                    maximum_temperature: {
                        deg_f: null
                    }
                },
                synonyms: []
            }
        }
    }
}

function Bio () {
    let { id } = useParams();
    let { url } = useRouteMatch()
    console.log(url);

    // let componentDidMount = function() {
    // fetch(`http://www.localhost:3000/${id}`)
    //     .then((response) => {response.json()})
    //     .then((results) => { 
    //         console.log(results);
    //         this.setState({
    //             data: results,
    //             isLoaded: true })
    //     }, 
    //     (error) => {
    //         this.setState({
    //             isLoaded: true,
    //             error
    //         }); 
    //     }
    // )   
    // }

    return (
        fetch(`http://www.localhost:3000/${url}`)
        .then((response) => {response.json()})
        .then((results) => { 
            console.log(results);
            this.setState({
                data: results,
                isLoaded: true })
        }) 
    )

}


export default Bio;