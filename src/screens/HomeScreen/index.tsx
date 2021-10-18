import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CitiesItemFooter,
  CitiesMenuItem,
  Divider,
  HeaderTitle,
} from '../../components';
import Spinner from '../../components/Spinner';
import {useGetCityById} from '../../hooks/useGetCityById';
import {citiesArray} from '../../utils/constants';
import {Container} from './styles';

const HomeScreen = () => {
  const [cities, setCities] = useState<string[]>([]);
  const {data, loading, error} = useGetCityById(cities);

  const setInitialCitiList = async () => {
    const storedCities = await AsyncStorage.getItem('cities');
    if (!storedCities) {
      await AsyncStorage.setItem('cities', JSON.stringify(citiesArray));
      setCities(citiesArray);
    } else {
      setCities(JSON.parse(storedCities));
    }
  };

  useEffect(() => {
    setInitialCitiList();
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  if (loading) return <Spinner />;

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({item}) => <CitiesMenuItem city={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title={'Cities'} />}
        ListFooterComponent={() => <CitiesItemFooter />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </Container>
  );
};

export default HomeScreen;
