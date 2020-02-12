import React from 'react';
import { useSelector } from 'react-redux';
import './CollectionPage.scss';
import CollectionItem from '../components/CollectionItem';

export default function CollectionPage({ match }) {
  const collections = useSelector(state => state.shop.collections);
  const collection = collections[match.params.collectionId];

  if (!collection) {
    return <h2>Collection doesn't exist.</h2>;
  }
  if (collection.length === 0) {
    return <h2>No items in the collection.</h2>;
  }
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
