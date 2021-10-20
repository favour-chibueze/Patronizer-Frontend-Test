import React from "react";
import PropTypes from 'prop-types';
import './formInput.scss'

const FormInput = ({
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    children,
    label,
    ...props
  }) => {
    
    return (
      <div className="form">
            <label htmlFor={name}>{label}</label>
            <input
            id={name}
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            className={className}
            style={error && {border: 'solid 1px red'}}
            />
            { error && <p className="is-error">{ error }</p>}
      </div>
    )
  }
  
  FormInput.defaultProps = {
    type: "",
    className: ""
  }
  
  FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number', 'radio']),
    className: PropTypes.string,
    value: PropTypes.any,
    // onChange: PropTypes.func.isRequired
  }

  export default FormInput