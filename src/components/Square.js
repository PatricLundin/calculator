import React from 'react';
import PropTypes from 'prop-types';
import "./Square.css";


const Square = (props) => (
    <div className={"Square " + props.type} style={{backgroundColor: props.color}}>
        {props.children}
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
