import React from 'react';
import './CheckoutPage.scss';
import { useSelector } from 'react-redux';
import CheckoutItem from '../components/CheckoutItem';
import StripeCheckoutButton from '../components/StripeCheckoutButton';

export default function CheckoutPage() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='picture'>
          <span>Product</span>
        </div>
        <div className='name'>
          <span>Name</span>
        </div>
        <div className='quantity'>
          <span>Quantity</span>
        </div>
        <div className='price'>
          <span>Price</span>
        </div>
        <div className='remove'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <div className='total'>${totalPrice}</div>

      <div style={{ color: 'red', margin: '30px 0 20px 0' }}>
        Please use following Test credit card values: 4242 4242 4242 4242 -
        01/20 - 123
      </div>

      <StripeCheckoutButton price={totalPrice} cartItems={cartItems} />
    </div>
  );
}
