import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sigil: 'w'
    };
  }

  render() {
    return (
      <div>
        <h1>Warptrail React Application Interface</h1>
      </div>
    );
  }
}
