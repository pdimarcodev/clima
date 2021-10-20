import AsyncStorage from '@react-native-async-storage/async-storage';
import {makeVar} from '@apollo/client';
import {citiesArray} from './constants';

export const getFavoriteCities = async () => {
  const storedCities = await AsyncStorage.getItem('cities');
  if (!storedCities?.length) {
    await AsyncStorage.setItem('cities', JSON.stringify(citiesArray));
    return makeVar<string[]>(citiesArray);
  } else {
    return makeVar<string[]>(JSON.parse(storedCities));
  }
};
