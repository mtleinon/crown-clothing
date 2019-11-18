// import SHOP_DATA from '../data/testData';
import {
  ADD_COLLECTIONS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE
} from './shopActions';

const INITIAL_STATE = {
  collections: {},
  isLoading: true
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.collections,
        isLoading: false
      }
    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      }
    case ADD_COLLECTIONS:
      return {
        ...state,
        collections: action.collections
      }
    default:
      return state;
  }
};

export default shopReducer;
