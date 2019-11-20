export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const toggleCartVisibility = () => (
  { type: TOGGLE_CART_VISIBILITY }
);
export const addItem = item => (
  { type: ADD_ITEM, item }
);
export const removeItem = itemId => (
  { type: REMOVE_ITEM, itemId }
);
export const deleteItem = itemId => (
  { type: DELETE_ITEM, itemId }
);
export const clearCart = () => (
  { type: CLEAR_CART }
);
