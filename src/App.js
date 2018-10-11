import React, { Component } from 'react';
import Square from './components/Square';
import './App.css';

class App extends Component {

  state = {
    values: [0, 0, 0],
    isSum: true
  }

  onValueChangeHandler = number => eventValue => {
    this.setState(prevState => {
      const newValues = prevState.values;
      newValues[number] = eventValue;
      return {
        values: newValues
      }
    })
  }

  onResultChangeHandler = () => () => {
    this.setState(prevState => {
      return {
        isSum: !prevState.isSum
      }
    })
  }

  calculateResult = () => {
    let { values } = this.state;
    values = values.map(value => parseInt(value)).map(value => value ? value : 0);
    if(this.state.isSum) {
      return values.reduce((total, value) => total + value, 0);
    } else {
      return values.reduce((total, value) => total * value);
    }
  }

  createValueSquare = number => {
    return (
      <Square key={number} type="value">
        <p>Value {number + 1}:</p>
        <input type="number" value={this.state.values[number]} onChange={event => this.onValueChangeHandler(number)(event.target.value)}/>
      </Square>
    )
  }

  createResultSquare = () => (
    <Square type="results">
      <div>
        <input type="checkbox" checked={this.state.isSum} onChange={this.onResultChangeHandler()}/>
        <label>Sum</label>
      </div>
      <div>
        <input type="checkbox" checked={!this.state.isSum} onChange={this.onResultChangeHandler()}/>
        <label>Multiply</label>
      </div>
      <p>{`Result: ${this.calculateResult()}`}</p>
    </Square>
  )

  render() {
    const valueSquares = [...Array(3)].map((x, i) => this.createValueSquare(i))
    return (
      <div className="App">
        {valueSquares}
        {this.createResultSquare()}
      </div>
    );
  }
}

export default App;
