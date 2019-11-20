import React from 'react';
import './CheckoutItem.scss';
import {useDispatch} from 'react-redux';
import * as cartActions from '../reducer/cartActions';

export default function CheckoutItem({item}) {
  const dispatch = useDispatch();
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt='item' src={item.imageUrl}/>
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <span className="button"
            onClick={()=>dispatch(cartActions.removeItem(item.id))}>
          &#10094;
        </span>
        <span className="quantity-value">
          {item.quantity}
        </span>
        <span className="button"
            onClick={()=>dispatch(cartActions.addItem(item))}>
          &#10095;
        </span>
      </span>
      <span className="price">{item.price}</span>
      <div className="delete-button"
        onClick={()=>dispatch(cartActions.deleteItem(item.id))}
      >&#10005;</div>
    </div>
  );
}