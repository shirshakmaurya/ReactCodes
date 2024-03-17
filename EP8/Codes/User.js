import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dataInfo: { name: "default" } };

    console.log(this.props.name, "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name, "child component did mount");
    // const data = await fetch("https://api.github.com/users/shirshakmaurya");
    // const json = await data.json();

    // this.setState({ dataInfo: json });
    this.timer = setInterval(() => {
      console.log("setInterval");
    }, 1000);
    this.setState({ dataInfo: { name: "newName" } });
  }

  componentDidUpdate() {
    console.log("child componet Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child componentWillUnmount");
  }

  render() {
    console.log(this.props.name, "Child Render");
    return (
      <div className="user-card">
        <h1>Name:{this.state.dataInfo.name}</h1>
        {/* <button
          onClick={() => {
            this.setState({ dataInfo: { name: "newName" } });
          }}
        >
          Change name
        </button> */}
        <h1>Contact:{"@Tony"}</h1>
      </div>
    );
  }
}

export default User;
