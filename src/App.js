import React, { Component } from 'react';
import ValueSquare from './components/ValueSquare';
import ResultSquare from './components/ResultSquare';
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

  onResultChangeHandler = () => event => {
    const eventValue = event.target.value;
    this.setState(prevState => {
      return {
        aggregate: eventValue
      }
    })
  }

  calculateResult = () => () => {
    let values = [...this.state.values];
    values = values.map(value => parseInt(value)).map(value => value ? value : 0);
    if(this.state.aggregate === "sum") {
      return values.reduce((total, value) => total + value, 0);
    } else {
      return values.reduce((total, value) => total * value);
    }
  }

  createValueSquare = number => (
    <ValueSquare key={number} number={number} values={this.state.values} onValueChangeHandler={this.onValueChangeHandler(number)}/>
  )

  createResultSquare = () => (
    <ResultSquare onResultChangeHandler={this.onResultChangeHandler()} calculateResult={this.calculateResult()}/>
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
