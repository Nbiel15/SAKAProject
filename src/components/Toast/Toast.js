import React from 'react';
import PropTypes from 'prop-types';
import './Toast.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const Toast = ({ variant, size, type, message, additionalMessage }) => {
  // Menentukan ikon berdasarkan variant
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return faCheckCircle;
      case 'warning':
        return faExclamationTriangle;
      case 'danger':
        return faTimesCircle;
      default:
        return faCheckCircle;
    }
  };

  return (
    <div className={`toast ${variant} ${size} ${type}`}>
      <div className="toast-header">
        <strong>{message}</strong>
        <FontAwesomeIcon icon={getIcon()} className="toast-icon" />
      </div>
      <div className="toast-body">
        <p>{additionalMessage}</p>
      </div>
    </div>
  );
};

Toast.propTypes = {
  variant: PropTypes.oneOf(['success', 'danger', 'warning']).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
  type: PropTypes.oneOf(['notification', 'information']).isRequired,
  message: PropTypes.string.isRequired,
  additionalMessage: PropTypes.string,
};

export default Toast;
