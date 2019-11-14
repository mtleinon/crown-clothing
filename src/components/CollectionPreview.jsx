import React from 'react'
import CollectionItem from './CollectionItem';
import './CollectionPreview.scss';

export default function CollectionPreview({collection}) {
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {collection.items.slice(0,4).map(item=>(<CollectionItem key={item.id} item={item}/>))}
      </div>
    </div>
  )
}
