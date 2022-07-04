import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import news from '../src/redux/reducers/news';
import HomeScreen from '../src/screens/HomeScreen';
import {QueryClient, QueryClientProvider} from 'react-query';

describe('Home Test', () => {
  let reducer = {reducer: news};
  const store = configureStore(reducer);
  const queryClient = new QueryClient();

  let component;
  beforeEach(() => {
    component = (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <HomeScreen />
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    );
  });

  it('renders without crashing', () => {
    const {toJSON} = render(component, {});
    expect(toJSON()).toMatchSnapshot();
  });
});
