import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../firebase/firebaseUtils';

export const ADD_COLLECTIONS = 'ADD_COLLECTIONS';
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS';
export const FETCH_COLLECTIONS_FAILURE = 'FETCH_COLLECTIONS_FAILURE';

export const addCollections = (collections) =>
  ({ type: ADD_COLLECTIONS, collections });

export const fetchCollectionsStart = () =>
  ({ type: FETCH_COLLECTIONS_START });

export const fetchCollectionsSuccess = collections =>
  ({ type: FETCH_COLLECTIONS_SUCCESS, collections });

export const fetchCollectionsFailure = errorMessage =>
  ({ type: FETCH_COLLECTIONS_FAILURE, errorMessage });

export const fetchCollectionsAsync = () => {
  return dispatch => {
    dispatch(fetchCollectionsStart());

    const collectionRef = firestore.collection('collections');
    collectionRef.get()
      .then(snapshot => {
        dispatch(
          fetchCollectionsSuccess(convertCollectionsSnapshotToMap(snapshot))
        );
      })
      .catch(error =>
        dispatch(fetchCollectionsFailure(error.message))
      );
  }
}