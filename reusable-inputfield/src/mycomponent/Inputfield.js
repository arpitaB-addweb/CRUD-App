import React from 'react';
import PropTypes from 'prop-types';



const InputField = ({value, placeholder,type, onChange}) => {
  

    const handleChange = (e) => {
        const {value} = e.target;
        
        onChange(value);
    };

    return (
        <div className="form-group">
                <input
                    type={type}
                    value={value}
                    className='form-control'
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            
        </div>
    )
};

InputField.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  value: '',
  label: '',
  placeholder: '',
  type: 'text',
};

export default InputField;
