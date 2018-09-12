import React from 'react';
import PropTypes from 'prop-types';

const TextInputFields = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{ label } {error}</label>
            <input onChange={onChange} type={type}
                   className={(error) ? 'form-control is-invalid' : 'form-control'}
                   name={name}
                   placeholder={placeholder}
                   value={value} />
            <div className="invalid-feedback">{error}</div>
        </div>
    )
};

TextInputFields.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
};

TextInputFields.defaultProps = {
    type: 'text'
};
export default TextInputFields;