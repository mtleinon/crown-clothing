import React from 'react';
import './PurchasedItem.scss';

export default function PurchasedItem({ item }) {
  return (
    <div className='purchased-item'>
      <span className='name'>{item.name}</span>
      <span className='quantity'>{item.quantity}</span>
      <span className='price'>{item.price}</span>
    </div>
  );
}
