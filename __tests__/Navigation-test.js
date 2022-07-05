import * as React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import news from '../src/redux/reducers/news';
import Navigation from '../src/components/Navigation';
import {QueryClient, QueryClientProvider} from 'react-query';

describe('Navigation Test', () => {
  let reducer = {reducer: news};
  const store = configureStore(reducer);
  const queryClient = new QueryClient();

  let component;
  beforeEach(() => {
    component = (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </QueryClientProvider>
    );
  });

  it('renders without crashing', () => {
    const {toJSON} = render(component, {});
    expect(toJSON()).toMatchSnapshot();
  });
});
