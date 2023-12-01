// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (     
      <div>
        <div>
        <h1>{this.state.count}</h1>
        </div>
        <div className='flexbox'>
          <button className='card' onClick={this.increase}>Increase</button>
          <button className='card' onClick={this.decrease}>Decrease</button>
          <button className='card' onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;