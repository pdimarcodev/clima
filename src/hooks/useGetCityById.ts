import {useQuery} from '@apollo/client';
import {GET_CITY_BY_ID} from '../apollo/queries/getCityById';
import {CityByIdResponse} from '../interfaces/City';

export const useGetCityById = (id: string[]) => {
  const {data, loading, error, refetch} = useQuery<CityByIdResponse>(
    GET_CITY_BY_ID,
    {
      variables: {
        id,
        config: {units: 'metric'},
      },
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
  );

  return {data: data?.getCityById, loading, error, refetch};
};
