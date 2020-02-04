import * as shopActions from './shopActions';

it('should create addCollections action', () => {
  const collections = [{ id: 1 }];
  const expectedAction = {
    type: shopActions.ADD_COLLECTIONS,
    collections
  };
  expect(shopActions.addCollections(collections)).toEqual(expectedAction);
});

it('should create fetchCollectionsStart action', () => {
  const expectedAction = {
    type: shopActions.FETCH_COLLECTIONS_START,
  };
  expect(shopActions.fetchCollectionsStart()).toEqual(expectedAction);
});
it('should create fetchCollectionsSuccess action', () => {
  const collections = [{ id: 1 }];
  const expectedAction = {
    type: shopActions.FETCH_COLLECTIONS_SUCCESS,
    collections
  };
  expect(shopActions.fetchCollectionsSuccess(collections)).toEqual(expectedAction);
});

it('should create fetchCollectionsFailure action', () => {
  const errorMessage = "error";
  const expectedAction = {
    type: shopActions.FETCH_COLLECTIONS_FAILURE,
    errorMessage
  };
  expect(shopActions.fetchCollectionsFailure(errorMessage)).toEqual(expectedAction);
});
