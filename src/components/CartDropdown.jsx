import React from 'react'
import './CartDropdown.scss';
import CustomButton from './CustomButton';
export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
      </div>
        <CustomButton  >GO TO CHECKOUT</CustomButton>
    </div>
    )
}
