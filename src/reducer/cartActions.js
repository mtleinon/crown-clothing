export const TOGGLE_CART_VISIBILITY = 'TOGGLE_CART_VISIBILITY';
export const ADD_ITEM = 'ADD_ITEM';

export const toggleCartVisibility = () => (
  { type: TOGGLE_CART_VISIBILITY }
);
export const addItem = item => (
  { type: ADD_ITEM, item }
);
