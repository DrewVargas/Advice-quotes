import React, { Component } from 'react';

class Advice extends Component {
  render() {
    return (
      <div>
        <p>{this.props.advice}</p>
      </div>
    );
  }
}

export default Advice;
