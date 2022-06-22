import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { Routes } from './routes';
import { client } from './configs/apollo';

import './css/global.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </StrictMode>
);
