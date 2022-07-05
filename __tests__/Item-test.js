import React from 'react';
import {render} from '@testing-library/react-native';
import Item from '../src/components/Item';

describe('Item component', () => {
  const item = {
    description:
      '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />',
  };
  it('should render correctly', () => {
    const {toJSON} = render(<Item item={item} />, {});
    expect(toJSON()).toMatchSnapshot();
  });
});
