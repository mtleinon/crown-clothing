import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CartIcon from './CartIcon';
import { toggleCartVisibility } from '../reducer/cartActions';
import { rootReducer } from '../reducer/store';

describe('<Component /> unit test', () => {
  const mockStore = createStore(rootReducer, {
    cart: {
      cartItems: [{ quantity: 1 }, { quantity: 2 }]
    }
  });
  mockStore.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={mockStore}>
      <CartIcon />
    </Provider>
  );

  it('should show correct Cart item count', () => {
    expect(wrapper.find('span').text()).toEqual('3');
  });

  it('should dispatch the correct action on button click', () => {
    wrapper.find('div').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(toggleCartVisibility());
  });
});
