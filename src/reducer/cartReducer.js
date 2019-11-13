import { TOGGLE_CART_VISIBILITY, ADD_ITEM } from './cartActions';

const INITIAL_STATE = {
  cartVisible: false,
  cartItems: []
};

const addItemToCart = (cartItems, item) => {
  if (cartItems.find(cartItem => cartItem.id === item.id)) {
    return cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem)
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisible: !state.cartVisible
      }
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.item)
      }
    default:
      return state;
  }
}