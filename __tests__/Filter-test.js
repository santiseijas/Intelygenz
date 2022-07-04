import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Filter from '../src/components/Filter';

describe('Filter component', () => {
  it('should render correctly', () => {
    const {getByPlaceholderText} = render(<Filter />);
    const textInput = getByPlaceholderText('Search');
    expect(textInput).toBeTruthy();
  });

  it('should call searchFilterFunction when text is entered', () => {
    const searchFilterFunction = jest.fn();
    const {getByPlaceholderText} = render(
      <Filter searchFilterFunction={searchFilterFunction} />,
    );
    const textInput = getByPlaceholderText('Search');
    fireEvent.changeText(textInput, 'test');
    expect(searchFilterFunction).toHaveBeenCalled();
  });
});
