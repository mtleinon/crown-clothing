import React from 'react'
import {useDispatch} from 'react-redux';
import * as cartActions from '../reducer/cartActions';

import './CollectionItem.scss';
import CustomButton from './CustomButton';

export default function CollectionItem({item}) {
  const dispatch = useDispatch();

  return (
    <div className="collection-item">
      <div className="image"
        style={{backgroundImage: `url(${item.imageUrl})`}} />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton 
        inverted 
        onClick={()=>dispatch(cartActions.addItem(item))}
      >
        Add to cart
      </CustomButton>
    </div>
  )
}
