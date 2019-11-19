import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStart } from '../reducer/shopActions';
//import { fetchCollectionsStart } from '../reducer/shopSagas';
import './ShopPage.scss';

import WithSpinner from '../components/WithSpinner';
import CollectionPage from './CollectionPage';
import CollectionsOverview from '../components/CollectionsOverview';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export default function ShopPage({ match }) {
  const isLoading = useSelector(state => state.shop.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCollectionsAsync());
    dispatch(fetchCollectionsStart());
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
