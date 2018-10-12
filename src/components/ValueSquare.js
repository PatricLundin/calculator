import React from 'react';
import Square from './Square';
import PropTypes from 'prop-types';


const ValueSquare = ({number, values, onValueChangeHandler}) => (
    <Square>
        <label className="value-square-label">{`Value ${number + 1}:`}</label>
        <input className="value-square-input" type="number" value={values[number]} 
               onChange={onValueChangeHandler}/>
    </Square>
)

ValueSquare.protoTypes = {
    number: PropTypes.number.isRequired,
    values: PropTypes.array.isRequired,
    onValueChangeHandler: PropTypes.func.isRequired
}


export default ValueSquare;
