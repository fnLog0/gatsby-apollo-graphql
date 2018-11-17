/* global window:true */

import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { CachePersistor } from 'apollo-cache-persist';
import { withClientState } from 'apollo-link-state';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import config from '../utils/config';
import defaults from './defaults';
import typeDefs from "./schema";
import resolvers from "./resolvers";

const cache = new InMemoryCache();

if (process.browser) {
  const persistor = new CachePersistor({
    cache,
    storage: global.window.localStorage,
    debug: config.debug,
  });
  persistor.restore();
}

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {

      console.log('onError', graphQLErrors, networkError);
      
      if (graphQLErrors) {
        graphQLErrors.map(({ message }) => alert(message));
      }

      if (networkError) alert(`[Network error]: ${networkError}`);
    }),
    withClientState({ resolvers, defaults, cache, typeDefs }),
    authLink.concat(httpLink),
  ]),
  cache,
});

// Purge persistor when the store was reset.
// client.onResetStore(() => persistor.purge());
// persistor.purge(); // clear local storage
// AsyncStorage.clear(); // clear local storage

export default client;
