import {GET_CITY_BY_ID} from '../../apollo/queries/getCityById';

export const citiesMock = [
  {
    request: {
      query: GET_CITY_BY_ID,
      variables: {
        id: ['1'],
      },
    },
    result: {
      data: {
        getCityById: [{id: '1', name: 'Buenos Aires'}],
      },
    },
  },
];
