import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Paper } from '@material-ui/core';

class Streak extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="main">
          <h1>Hello</h1>
          <Paper variant="outlined" square elevation={3}/>
      </div>
    );
  }
}

export default Streak;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Streak />, wrapper) : false;