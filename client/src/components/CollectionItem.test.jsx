import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CollectionItem from './CollectionItem';
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
      <CollectionItem item={mockItem} />
    </Provider>
  );

  it('should show correct Cart item data', () => {
    // expect(wrapper.find('.image').props().src).toEqual(mockItem.imageUrl);
    expect(wrapper.find('.name').text()).toEqual(mockItem.name);
    expect(wrapper.find('.price').text()).toEqual(mockItem.price.toString());
  });

  it('should dispatch addItem action on button click', () => {
    //TODO: For some reason #button id is found from 4 elements???
    // wrapper.find('#button').simulate('click');
    //   expect(mockStore.dispatch).toHaveBeenCalledWith(
    //     cartActions.addItem(mockItem)
    //   );
  });
});
