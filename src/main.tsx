import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import { Routes } from './routes';
import { client } from './configs/apollo';

import './css/global.css';
import { VideoContextProvider } from './context/VideoContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <VideoContextProvider>
        <Routes />
      </VideoContextProvider>
    </ApolloProvider>
  </StrictMode>
);
