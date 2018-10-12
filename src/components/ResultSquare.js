import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';


const ResultSquare = ({onResultChangeHandler, calculateResult}) => (
    <Square type="results" color={'pink'}>
      <div className="results-square-wrapper">
        <div>
          <input type="radio" name="aggregate" value="sum" defaultChecked onChange={onResultChangeHandler}/>
          <label>Sum</label>
        </div>
        <div>
          <input type="radio" name="aggregate" value="multiply" onChange={onResultChangeHandler}/>
          <label>Multiply</label>
        </div>
      </div>
      <p>{`Result: ${calculateResult()}`}</p>
    </Square>
)

ResultSquare.protoTypes = {
    onResultChangeHandler: PropTypes.func.isRequired,
    calculateResult: PropTypes.func.isRequired
}


export default ResultSquare;
