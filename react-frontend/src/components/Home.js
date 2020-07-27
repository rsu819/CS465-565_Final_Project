import React from "react";

class Home extends React.Component {
  render() {
    return <div>
        <form action="#">
        <div class="form-group m-5 p-5 text-center">
            <label for="search" class="lead mb-3 display-4">Enter plant to care for:</label>
            <input type="text" id="search" class="form-control m-2" placeholder="search any plant..." required />
            <button type="submit" class="btn btn-md btn-primary mt-3 text-dark font-weight-bold" id="submit" name="Submit">Submit</button>
        </div>
    </form>
    </div>;
  }
}

export default Home;