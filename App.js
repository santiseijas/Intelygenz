import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/components/Navigation';
import createStore from './src/redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';

export const initialState = {
  news: [],
};

const queryClient = new QueryClient();
const store = createStore(initialState);

export default function App() {
  console.disableYellowBox = true;
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  );
}
