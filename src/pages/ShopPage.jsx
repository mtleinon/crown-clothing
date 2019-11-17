import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as shopActions from '../reducer/shopActions';
import './ShopPage.scss';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../firebase/firebaseUtils';

import WithSpinner from '../components/WithSpinner';
import CollectionPage from './CollectionPage';
import CollectionsOverview from '../components/CollectionsOverview';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  // const collections = useSelector(state=>state.shop.collections);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.debug('Shop Page useEffect =');

    // dispatch(shopActions.fetchCollections());
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      dispatch(
        shopActions.addCollections(convertCollectionsSnapshotToMap(snapshot))
      );
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
}
