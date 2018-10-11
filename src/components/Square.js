import React from 'react';
import PropTypes from 'prop-types';
import "./Square.css";


const Square = (props) => (
    <div className="Square" style={{backgroundColor: props.color}}>
        {props.children}
    </div>
)

Square.protoTypes = {
    color: PropTypes.string
}

Square.defaultProps = {
    color: '#38b2ff',
};


export default Square;
