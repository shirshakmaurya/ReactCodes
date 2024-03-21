import React from "react";

class User2 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "Child constructor2");
  }

  componentDidMount() {
    console.log(this.props.name, "child componentDidMount2");
  }

  render() {
    console.log(this.props.name, "child render2");
    return (
      <div>
        <h1>User2</h1>
      </div>
    );
  }
}

export default User2;
