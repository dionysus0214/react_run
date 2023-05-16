import React from 'react';
import './App.css';
import MainProduct from './basic/components/Product';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainProduct />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
