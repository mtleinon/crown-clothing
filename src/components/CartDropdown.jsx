import React from 'react'
import {useSelector} from 'react-redux';

import './CartDropdown.scss';
import CustomButton from './CustomButton';
import CartItem from './CartItem';

export default function CartDropdown() {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))}
      </div>
      <CustomButton  >GO TO CHECKOUT</CustomButton>
    </div>
    )
}
