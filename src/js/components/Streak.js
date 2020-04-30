import React, { Component } from "react";
import ReactDOM from "react-dom";

class Streak extends Component {
  constructor() {
    super();
    const name = "Anthony Mercado";
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <h1>Hello, {name}</h1>
      </div>
    );
  }
}

export default Streak;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Streak />, wrapper) : false;