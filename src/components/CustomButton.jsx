import React from 'react'
import './CustomButton.scss';
export default function CustomButton({children, googleSignIn, ...otherProps}) {
  return (
    <button className={'custom-button' + (googleSignIn ? ' google-sign-in' : '')} {...otherProps}>
      {children}
    </button>
  )
}
