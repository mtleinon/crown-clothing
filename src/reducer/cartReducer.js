import { TOGGLE_CART_VISIBILITY } from './cartActions';

const INITIAL_STATE = {
  cartVisible: false
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisible: !state.cartVisible
      }
    default:
      return state;
  }
}