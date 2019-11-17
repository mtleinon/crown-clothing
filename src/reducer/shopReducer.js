// import SHOP_DATA from '../data/testData';
import { ADD_COLLECTIONS } from './shopActions';

const INITIAL_STATE = {
  collections: {}
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
