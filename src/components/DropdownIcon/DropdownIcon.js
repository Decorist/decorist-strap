import React from 'react';
import PropTypes from 'prop-types';

/** SVG Dropdown icon */
function DropdownIcon({height, width}) {
  return (
    <svg width={width} height={height} viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L5 5L9 1" stroke="#313131" stroke-linecap="round"/>
    </svg>
  )
}

DropdownIcon.defaultProps = {
  height: "16",
  width: "10"
}

DropdownIcon.propTypes = {
  /** Height of svg icon */
  height: PropTypes.string,
  /** Width of svg icon */
  width: PropTypes.string
}


export default DropdownIcon;
