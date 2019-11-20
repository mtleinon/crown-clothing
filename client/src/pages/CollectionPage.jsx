import React from 'react';
import { useSelector } from 'react-redux';
import './CollectionPage.scss';
import CollectionItem from '../components/CollectionItem';

export default function CollectionPage({ match }) {
  console.debug('match =', match);
  const collections = useSelector(state => state.shop.collections);
  console.debug('collections =', collections);
  const collection = collections[match.params.collectionId];
  console.debug('collection =', collection);
  if (!collection) {
    return <h2>Collection doesn't exist.</h2>;
  }
  if (collection.length === 0) {
    return <h2>No items in the collection.</h2>;
  }
  const { title, items } = collection;
  console.debug('title, items =', title, items);
  return (
    <div className='collection-page'>
      <h2 className='title'>{collection.title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
