import React, { useEffect } from "react";
import { useState } from "react";
import "../stylesheets/Home.css";
import { useRouteMatch } from "react-router-dom";


// class PlantInfo extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             common_name: "",
//             scientific_name: "",
//             main_species: {
//                 foliage: {
//                     texture: "",
//                     leaf_retention: "",
//                 },
//                 fruit: {
//                     color: ""
//                 },
//                 flower: {
//                     color: ""
//                 },
//                 specifications: {
//                     growth_habit: "",
//                     average_height: null,
//                     shape_and_orientation: "",
//                 },
//                 growth: {
//                     light: "",
//                     atmospheric_humidity: "",
//                     minimum_precipitation: null,
//                     maximum_precipitation: null,
//                     minimum_temperature: {
//                         deg_f: null
//                     },
//                     maximum_temperature: {
//                         deg_f: null
//                     }
//                 },
//                 synonyms: []
//             }
//         }
//     }
// }

function Bio () {
    //let { id } = useParams();
    const { url } = useRouteMatch();
    
    console.log(url);
    const [plantInfo, setInfo] = useState([])
    const [isLoaded, setStatus] = useState(false);
    const [error, setError] = useState(null);

    useEffect((url) => {
        fetch(`http://www.localhost:3000/${url}`)
            .then((response) => {response.json()})
            .then((apiRes) => { 
                console.log(apiRes);
                setInfo(apiRes.data);
                setStatus(true);
                },
                (error) => {
                    setError(error);
                })
    }, [])
    
   
    if (error) {
        return <div>Error: {error.message}</div>
    }
    else if (!isLoaded) {
        return <div>Loading Plant Data...</div>
    }
    else {
        return (
            <div>
                <h1>{plantInfo.common_name}</h1>
                <div>
                    <img className="plantPic" src={plantInfo.image_url} alt={`${plantInfo.common_name}`} />
                    <p>
                        Common Name: {plantInfo.common_name}<br/>
                        Scientific Name: {plantInfo.scientific_name}<br/>
                        Foliage Texture: <br/>
                        Flower color, if any: <br/>
                        Fruit color, if any: <br/>
                        Growth Habit: <br/>
                        Average Height: <br/>
                        Shape and Orientation: <br/>
                        Toxicity: {plantInfo.main_species.specification.toxicity}<br/>
                        Light Requirement: <br/>
                        Humidity: <br/>
                        Minimum Precipitation: <br/>
                        Maximum Precipitation: <br/>
                        Minimum Temperature Needed: <br/>
                        Maximum Temperature Tolerated: <br/>
                        Synonyms for this plant: {} <br/>
                    </p>
                </div>
            </div>  
        )
    }
}

       




export default Bio;