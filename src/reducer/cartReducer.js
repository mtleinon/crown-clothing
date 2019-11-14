import { TOGGLE_CART_VISIBILITY, ADD_ITEM, REMOVE_ITEM, DELETE_ITEM } from './cartActions';

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

// Cart must have at least one item. Use DELETE_ITEM to 
// remove whole item
const removeItemFromCart = (cartItems, itemId) => {
  return cartItems.map(cartItem =>
    cartItem.id === itemId
      ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
      : cartItem)
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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.itemId)
      }
    case DELETE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.itemId
        )
      }
    default:
      return state;
  }
}