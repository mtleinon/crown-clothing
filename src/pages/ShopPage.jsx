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
    fetch(
      'https://firestore.googleapis.com/v1/projects/crown-db/databases/(default)/documents/collections'
    )
      .then(response => response.json())
      .then(responseCollections => {
        const collections = responseCollections.documents.map(collection => {
          const rCollection = {
            id: collection.fields.title.stringValue.toLowerCase(),
            title: collection.fields.title.stringValue,
            routeName: collection.fields.title.stringValue.toLowerCase(),
            items: collection.fields.items.arrayValue.values.map(v => {
              const item = {
                id: v.mapValue.fields.id.integerValue,
                imageUrl: v.mapValue.fields.imageUrl.stringValue,
                name: v.mapValue.fields.name.stringValue,
                price: v.mapValue.fields.price.integerValue
              };
              return item;
            })
          };
          return rCollection;
        });
        const collectionMap = collections.reduce(
          (acc, col) => ({ ...acc, [col.routeName]: col }),
          {}
        );
        dispatch(shopActions.addCollections(collectionMap));
        setIsLoading(false);
      });

    // const collectionRef = firestore.collection('collections');
    // collectionRef.get().then(async snapshot => {
    //   console.debug(
    //     'NOT ADDED: convertCollectionsSnapshotToMap(snapshot) =',
    //     convertCollectionsSnapshotToMap(snapshot)
    //   );
    //   dispatch(
    //     shopActions.addCollections(convertCollectionsSnapshotToMap(snapshot))
    //   );
    //   setIsLoading(false);
    // });
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
