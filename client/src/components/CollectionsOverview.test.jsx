import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CollectionsOverview from './CollectionsOverview';
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

  const mockStore = createStore(rootReducer, {
    shop: {
      //TODO: child components use history hooks so they
      //testing doesn't work now
      collections: []
    }
  });
  mockStore.dispatch = jest.fn();
  const wrapper = mount(
    <Provider store={mockStore}>
      <CollectionsOverview item={mockItem} />
    </Provider>
  );

  it('should show correct Cart item data xxx', () => {
    expect(wrapper.find('.collections-overview').children().length).toEqual(0);
  });
});
