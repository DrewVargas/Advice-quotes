import React, { Component } from 'react';
import axios from 'axios';
import Advice from './Advice';
import { randomAuthor } from './Helpers';

class AdviceContainer extends Component {
  static defaultProps = {
    Authors: [
      'Albert Einstein',
      'Abraham Lincoln',
      'Margaret Thatcher',
      'Harriet Tubman'
    ]
  };
  constructor(props) {
    super(props);
    this.state = { advice: '' };
    this.getAdvice = this.getAdvice.bind(this);
  }
  async componentDidMount() {
    this.getAdvice();
  }
  async getAdvice() {
    const URL = 'https://api.adviceslip.com/advice';
    const response = await axios.get(URL);
    const adviceSlip = response.data.slip;
    this.setState({ advice: adviceSlip.advice });
  }
  render() {
    return (
      <div className="AdviceContainer">
        <h1>Actual Quotes</h1>
        <div className="AdviceContainer-quote">
          <Advice advice={this.state.advice} />
          <p className="AdviceContainer-author">
            ~-~ {randomAuthor(this.props.Authors)}
          </p>
        </div>
        <button className="AdviceContainer-btn" onClick={this.getAdvice}>
          Get some advice!
        </button>
      </div>
    );
  }
}

export default AdviceContainer;
