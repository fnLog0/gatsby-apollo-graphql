import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components'

import client from './src/store/apolloClient';
import theme from './src/utils/theme';

export default ({ element }) => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      {element}
    </ThemeProvider>
  </ApolloProvider>
);
