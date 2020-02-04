import * as cartActions from './cartActions';

it('should create toggleCartVisibility action', () => {
  const expectedAction = {
    type: cartActions.TOGGLE_CART_VISIBILITY,
  };
  expect(cartActions.toggleCartVisibility()).toEqual(expectedAction);
});

it('should create an addItem action', () => {
  const item = { id: 1 };
  const expectedAction = {
    type: cartActions.ADD_ITEM,
    item
  };
  expect(cartActions.addItem(item)).toEqual(expectedAction);
});

it('should create an removeItem action', () => {
  const itemId = 1;
  const expectedAction = {
    type: cartActions.REMOVE_ITEM,
    itemId
  };
  expect(cartActions.removeItem(itemId)).toEqual(expectedAction);
});

it('should create an deleteItem action', () => {
  const itemId = 1;
  const expectedAction = {
    type: cartActions.DELETE_ITEM,
    itemId
  };
  expect(cartActions.deleteItem(itemId)).toEqual(expectedAction);
});

it('should create clearCart action', () => {
  const expectedAction = {
    type: cartActions.CLEAR_CART,
  };
  expect(cartActions.clearCart()).toEqual(expectedAction);
});

