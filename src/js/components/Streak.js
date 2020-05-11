import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
      </div>
    );
  }
}

export default Streak;

ReactDOM.render(<Streak />, document.getElementById('container'));
