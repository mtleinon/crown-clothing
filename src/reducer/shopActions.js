export const ADD_COLLECTIONS = 'ADD_COLLECTIONS';
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START';

export const addCollections = (collections) =>
  ({ type: ADD_COLLECTIONS, collections });
export const fetchCollections = () =>
  ({ type: FETCH_COLLECTIONS_START });