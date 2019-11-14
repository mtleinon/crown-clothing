import React from 'react';
import './CheckoutPage.scss';
import {useSelector} from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';

export default function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = 
    cartItems.reduce((totalPrice, item) => 
        totalPrice + item.quantity*item.price, 0);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item=><CheckoutItem key={item.id} item={item} />)}
      <div className="total">${totalPrice}</div>
    </div>
  );
}