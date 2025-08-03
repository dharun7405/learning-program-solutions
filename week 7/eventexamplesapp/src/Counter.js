import React, { Component } from 'react';

class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    console.log('Hello! Increment clicked!');
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = msg => {
    alert(msg);
  };

  handleClick = () => {
    alert('I was clicked');
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>
        <button onClick={this.handleClick}>OnPress</button>
      </div>
    );
  }
}

export default Counter;