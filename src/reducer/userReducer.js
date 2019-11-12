import { SET_CURRENT_USER } from './userActions';

const INITIAL_STATE = {
  currentUser: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.currentUser
      }
    default:
      return state;
  }

}