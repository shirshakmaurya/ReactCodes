import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Name:{this.props.name}</h1>
        <h1>Contact:{"@Tony"}</h1>
      </div>
    );
  }
}

export default User;
