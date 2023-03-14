import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, name, placeholder, required }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} required={required} />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
