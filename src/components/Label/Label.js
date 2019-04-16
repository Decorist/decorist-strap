import React from 'react';
import PropTypes from 'prop-types';

/** Label with required field display, htmlFor, and block styling */
function Label({htmlFor, label, required, styles}) {
  const stylesDefault = {display: 'block', "textTransform": "capitalize", "fontSize": "16px", };
  return (
    <label style={{...styles, ...stylesDefault}} htmlFor={htmlFor} >
      {label} { required && <span style={{color: 'red'}}> *</span> }
    </label>
    
  )
}

Label.propTypes = {
  /** HTML ID for associated input */
  htmlFor: PropTypes.string.isRequired,

  /** Label text */
  label: PropTypes.string.isRequired,

  /** Display asterisk after label if true */
  required: PropTypes.bool
};

export default Label;
