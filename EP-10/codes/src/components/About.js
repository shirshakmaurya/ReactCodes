import User from "./User";
import User2 from "./User2";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component did Mount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is the about page</h1>
        <h2>I'm creating routes using react-router-dom</h2>
        <User name={"first"} />
        {/* <User name={"second"} /> */}
      </div>
    );
  }
}

export default About;
