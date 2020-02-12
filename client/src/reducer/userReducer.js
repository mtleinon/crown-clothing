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
  signUpError: null,
  signInError: null,
  signOutError: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        signUpError: null,
        signInError: null
      }
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
        signUpError: null,
        signInError: null
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        signOutError: null
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: action.error
      }
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signInError: action.error
      }
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        signOutError: action.error
      }
    default:
      return state;
  }

}