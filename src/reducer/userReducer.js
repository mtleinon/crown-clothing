import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from './userActions';

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        error: null
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      }
    case SIGN_UP_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.error
      }
    default:
      return state;
  }

}