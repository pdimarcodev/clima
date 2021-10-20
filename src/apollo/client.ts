import {ApolloClient} from '@apollo/client';
import {cache} from './cache';

export const client = new ApolloClient({
  uri: 'https://graphql-weather-api.herokuapp.com',
  cache,
});
