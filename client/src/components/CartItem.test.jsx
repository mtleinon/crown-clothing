import { shallow } from 'enzyme';
import React from 'react';
import { CartItem } from './CartItem';

it('Expect to render CartItem component', () => {
  const mockItem = {
    imageUrl: 'url',
    name: 'test',
    quantity: 3,
    price: 123.32
  };
  expect(shallow(<CartItem item={mockItem} />)).toMatchSnapshot();
});
