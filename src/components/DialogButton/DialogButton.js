import React from 'react';
import PropTypes from 'prop-types';
import './DialogButton.css';

const DialogButton = ({ label, action, size, type }) => {
  return (
    <button className={`dialog-button ${size} ${type}`} onClick={action}>
      {label}
    </button>
  );
};

DialogButton.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']),
};

DialogButton.defaultProps = {
  size: 'medium',
  type: 'primary',
};

export default DialogButton;
