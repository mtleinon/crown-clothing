import React from 'react'
import './FormInput.scss';

export default function FormInput(
  { onChange, label, ...otherProps}
) {

  return (
    <div className="group">
      <input name="input" type="text" className="form-input" onChange={onChange} {...otherProps}/>
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}  htmlFor="input">
          {label}
        </label>
      ): null}
    </div>
  )
}
