import React from 'react';
import './CollectionsOverview.scss';
import CollectionPreview from './CollectionPreview';
import {useSelector} from 'react-redux';

export default function CollectionsOverview() {
  const collections = useSelector(state=>state.shop.collections);

  return (
    <div className="collections-overview">
      {collections.map(collection=>
        <CollectionPreview key={collection.id} collection={collection} />)
      }
    </div>
  );
}