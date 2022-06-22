import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pw3aur2ef201xt9yna90hd/master',
  cache: new InMemoryCache(),
});
