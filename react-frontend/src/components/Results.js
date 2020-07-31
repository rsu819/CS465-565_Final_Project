import React from "react";
import '../App.css';
//import { response } from "express";



class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    }
    
   componentDidMount() {
       
   }
    
    render() {
        return (<div>
                <h2 className="title">Results from Search:</h2>
                <div>
                    <p>THIS PAGE</p>
                    <p></p>
                </div>
            </div>
        );
    }
}

export default Results;
