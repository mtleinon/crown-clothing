import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CheckoutItem from './CheckoutItem';
import * as cartActions from '../reducer/cartActions';
import { rootReducer } from '../reducer/store';

describe('<Component /> unit test', () => {
  const mockItem = {
    imageUrl: 'url',
    name: 'test',
    quantity: 3,
    price: 123.32,
    id: 1
  };

  const mockStore = createStore(rootReducer, {});
  mockStore.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={mockStore}>
      <CheckoutItem item={mockItem} />
    </Provider>
  );

  it('should show correct Cart item data', () => {
    expect(wrapper.find('img').props().src).toEqual(mockItem.imageUrl);
    expect(wrapper.find('.name').text()).toEqual(mockItem.name);
    expect(wrapper.find('.price').text()).toEqual(mockItem.price.toString());
    expect(wrapper.find('.quantity-value').text()).toEqual(
      mockItem.quantity.toString()
    );
  });

  it('should dispatch removeItem action on button click', () => {
    wrapper.find('#remove').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      cartActions.removeItem(mockItem.id)
    );
  });

  it('should dispatch addItem action on button click', () => {
    wrapper.find('#add').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      cartActions.addItem(mockItem)
    );
  });

  it('should dispatch deleteItem action on button click', () => {
    wrapper.find('.delete-button').simulate('click');
    expect(mockStore.dispatch).toHaveBeenCalledWith(
      cartActions.deleteItem(mockItem.id)
    );
  });
});
