import React from 'react'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import './CartDropdown.scss';
import CustomButton from './CustomButton';
import CartItem from './CartItem';

export default function CartDropdown() {
  const history = useHistory ();

  //TODO: Check how to prevent unnecesary rerendering  when e.g only state.user changes
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length 
        ? cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem}/>
        ))
      : ( <span className="empty-message">Your cart is empty</span>   )}
      </div>
      <CustomButton 
        onClick={()=> history.push(`/checkout`)}
      >GO TO CHECKOUT</CustomButton>
    </div>
    )
}
