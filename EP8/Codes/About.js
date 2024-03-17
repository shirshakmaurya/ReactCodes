import User from "./User";
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
        <User name={"Tony stark"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>This is the about page</h1>
//       <h2>I'm creating routes using react-router-dom</h2>
//       <User name={"Tony stark"} />
//     </div>
//   );
// };

export default About;
