import React, { Component } from 'react';
import Square from './components/Square';
import './App.css';

const NUMBER_VALUE_SQUARES = 3;

class App extends Component {
  state = {
    values: Array(NUMBER_VALUE_SQUARES).fill(0),
    aggregate: "sum"
  }

  onValueChangeHandler = number => event => {
    const eventValue = event.target.value;
    this.setState(prevState => {
      let newValues = [...prevState.values];
      newValues[number] = eventValue;
      return {
        values: newValues
      }
    })
  }

  onResultChangeHandler = () => (event) => {
    const eventValue = event.target.value;
    this.setState(prevState => {
      return {
        aggregate: eventValue
      }
    })
  }

  calculateResult = () => {
    let values = [...this.state.values];
    values = values.map(value => parseInt(value)).map(value => value ? value : 0);
    if(this.state.aggregate === "sum") {
      return values.reduce((total, value) => total + value, 0);
    } else {
      return values.reduce((total, value) => total * value);
    }
  }

  createValueSquare = number => {
    return (
      <Square key={number} type="value">
        <label className="value-square-label">Value {number + 1}:</label>
        <input className="value-square-input" type="number" value={this.state.values[number]} 
               onChange={this.onValueChangeHandler(number)}/>
      </Square>
    )
  }

  createResultSquare = () => (
    <Square type="results" color={'pink'}>
      <div className="results-square-wrapper">
        <div>
          <input type="radio" name="aggregate" value="sum" defaultChecked onChange={this.onResultChangeHandler()}/>
          <label>Sum</label>
        </div>
        <div>
          <input type="radio" name="aggregate" value="multiply" onChange={this.onResultChangeHandler()}/>
          <label>Multiply</label>
        </div>
      </div>
      <p>{`Result: ${this.calculateResult()}`}</p>
    </Square>
  )

  render() {
    return (
      <div className="App">
        {[...Array(NUMBER_VALUE_SQUARES)].map((x, i) => this.createValueSquare(i))}
        {this.createResultSquare()}
      </div>
    );
  }
}

export default App;
