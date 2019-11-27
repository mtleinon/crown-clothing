import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStart } from '../reducer/shopActions';
//import { fetchCollectionsStart } from '../reducer/shopSagas';
import './ShopPage.scss';

import WithSpinner from '../components/WithSpinner';
import Spinner from '../components/Spinner';

// import CollectionPage from './CollectionPage';
const CollectionPage = lazy(() => import('./CollectionPage'));
// import CollectionsOverview from '../components/CollectionsOverview';
const CollectionsOverview = lazy(() =>
  import('../components/CollectionsOverview')
);

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
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
}
