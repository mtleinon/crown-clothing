import { takeLatest, call, put } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../firebase/firebaseUtils';

import { FETCH_COLLECTIONS_START } from './shopActions';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shopActions';

export function* fetchCollectionsAsync() {
  yield console.debug(' saga 1 =');

  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collections = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}