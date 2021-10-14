import {useQuery} from '@apollo/client';
import {GET_CITY_BY_ID} from '../apollo/queries/getCityById';

export const useGetCityById = (id: string[]) => {
  const {data, refetch} = useQuery(GET_CITY_BY_ID, {
    variables: {
      id,
      config: {units: 'metric'},
    },
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  });

  return {data, refetch};
};
