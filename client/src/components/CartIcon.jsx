import React from 'react';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../reducer/cartActions';
import './CartIcon.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartItemQuantity = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );

  return (
    <div
      className='cart-icon'
      onClick={() => {
        dispatch(toggleCartVisibility());
      }}
    >
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemQuantity}</span>
    </div>
  );
}
