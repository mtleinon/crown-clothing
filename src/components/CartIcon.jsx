import React from 'react'
import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg';
import {useSelector, useDispatch} from 'react-redux';
import { toggleCartVisibility } from '../reducer/cartActions';
import './CartIcon.scss';

export default function CartIcon() {
  const dispatch = useDispatch();
  const cartVisible = useSelector(state => state.cart.cartVisible);

  return (
    <div className="cart-icon" onClick={()=>dispatch(toggleCartVisibility())}>
      <ShoppingIcon className='shopping-icon'/>
      <span className="item-count">0</span>
    </div>
  )
}
