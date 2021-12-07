import React from 'react';
import PropTypes from 'prop-types';


const Button = ({value, onClick}) => (
    <button
        className='app-button'
        onClick={(event) => onClick(event)}>
        {value}
    </button>
);

Button.propTypes = {
    styleClass: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
    styleClass: 'btn-primary'
};

export default Button;