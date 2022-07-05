import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/components/Navigation';
import createStore from './src/redux/store';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {queries: {cacheTime: 1000 * 60 * 60 * 24}},
});

const store = createStore();

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
