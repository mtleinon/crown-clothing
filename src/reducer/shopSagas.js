import { takeEvery } from 'redux-saga/effects';

import { ADD_COLLECTIONS, FETCH_COLLECTIONS_START } from './shopActions';

export function* fetchCollectionsAsync() {
  yield console.debug(' saga 1 =');
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}