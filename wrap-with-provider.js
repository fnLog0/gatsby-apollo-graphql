import React from 'react';
import { ApolloProvider } from 'react-apollo';

import client from './src/store/apolloClient';

export default ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
