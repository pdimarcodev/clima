import {useQuery} from '@apollo/client';
import {GET_CITY_BY_ID} from '../apollo/queries/getCityById';
import {CityResponse} from '../interfaces/City';

export const useGetCityById = (id: string[]) => {
  const {data, refetch} = useQuery<CityResponse>(GET_CITY_BY_ID, {
    variables: {
      id,
      config: {units: 'metric'},
    },
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
  });

  return {data: data?.getCityById, refetch};
};
