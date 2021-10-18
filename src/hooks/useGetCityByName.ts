import {useQuery} from '@apollo/client';
import {GET_CITY_BY_NAME} from '../apollo/queries/getCityByName';
import {CityByNameResponse} from '../interfaces/City';

export const useGetCityByName = (name: string) => {
  const {data, loading, error} = useQuery<CityByNameResponse>(
    GET_CITY_BY_NAME,
    {
      variables: {
        name,
        config: {units: 'metric'},
      },
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
  );

  return {data: data?.getCityByName, loading, error};
};
