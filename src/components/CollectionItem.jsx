import React from 'react'
import './CollectionItem.scss';
import CustomButton from './CustomButton';
export default function CollectionItem({item}) {
  return (
    <div className="collection-item">
      <div className="image"
        style={{backgroundImage: `url(${item.imageUrl})`}} />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton inverted>Add to cart</CustomButton>
    </div>
  )
}
