import React from 'react'
import { Route } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import {useSelector} from 'react-redux';
import CollectionsOverview from '../components/CollectionsOverview';

export default function ShopPage({match}) {
  const collections = useSelector(state=>state.shop.collections);
  return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} 
          component={CollectionsOverview} /> 
        <Route exact path={`${match.path}/:collectionId`} 
          component={CollectionPage} />
            {/* // {collections.map(collection =>
            //  (<CollectionPreview key={collection.id} collection={collection} />))} */}
      </div>
  )
}
