import React from 'react'
import './CustomButton.scss';
export default function CustomButton({children, googleSignIn, inverted, ...otherProps}) {
  const className = 'custom-button' + 
    (googleSignIn ? ' google-sign-in' : '') +
    (inverted ? ' inverted' : '');

  return (
    <button className={className} {...otherProps}>
      {children}
    </button>
  )
}
