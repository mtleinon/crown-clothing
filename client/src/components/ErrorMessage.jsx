import React from 'react';
import './ErrorMessage.scss';

export const ErrorMessage = ({ children }) => {
  return <div className='errorMessage'>{children}</div>;
};

export default ErrorMessage;
