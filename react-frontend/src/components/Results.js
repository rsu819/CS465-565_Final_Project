import React from "react";
import '../App.css';



class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}
    }
    
    
    render() {
        return (<div>
                <p className="title"> Hello Hello? </p>
            </div>
        );
    }
}

export default Results;
