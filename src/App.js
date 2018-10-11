import React, { Component } from 'react';
import Square from './components/Square';
import './App.css';

class App extends Component {

  state = {
    value1: 0,
    value2: 0,
    value3: 0
  }

  onValueChangeHandler = number => eventValue => {
    this.setState(prevState => {
      return {
        ["value" + number]: eventValue
      }
    })
  }

  createValueSquare = (number) => {
    return (
      <Square key={number}>
        <p>Value {number}:</p>
        <input type="number" value={this.state["value" + number]} onChange={event => this.onValueChangeHandler(number)(event.target.value)}/>
      </Square>
    )
  }

  render() {
    const valueSquares = [...Array(3)].map((x, i) => this.createValueSquare(i + 1))
    return (
      <div className="App">
        {valueSquares}
      </div>
    );
  }
}

export default App;
