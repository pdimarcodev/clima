import {InMemoryCache, makeVar} from '@apollo/client';

export const favoriteCities = makeVar([] as string[]);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        favoriteCities: {
          read() {
            return favoriteCities();
          },
        },
      },
    },
  },
});
