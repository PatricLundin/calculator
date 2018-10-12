import React from 'react';
import PropTypes from 'prop-types';
import "./Square.css";


const Square = ({color, children, type}) => (
    <div className={"Square " + type} style={{backgroundColor: color}}>
        {children}
    </div>
)

Square.protoTypes = {
    color: PropTypes.string,
    type: PropTypes.string.isRequired
}

Square.defaultProps = {
    color: '#38b2ff',
};


export default Square;
