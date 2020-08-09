import React from "react";
import { Image } from "react-bootstrap";
import succulent from "../images/succulents.jpg";

class PageNotFound extends React.Component {

  render() {
    return (
      <div>
        < h1 className="m-5" >Page not found! </h1>
        <Image
          className="w-30 text-center"
          src={succulent}
          alt="Succulent planter box"
          fluid
        />
      </div>
    );
  }
}

export default PageNotFound;
