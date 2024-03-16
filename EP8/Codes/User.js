import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0, count2: 2 };
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h1>Name:{this.props.name}</h1>
        <h1>Contact:{"@Tony"}</h1>
      </div>
    );
  }
}

export default User;
