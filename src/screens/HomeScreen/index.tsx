import React, {useEffect, useState} from 'react';
import {FlatList, RefreshControl} from 'react-native';
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
import {favoriteCities} from '../../apollo/cache';
import {useIsFocused} from '@react-navigation/core';

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const [refreshing, setRefreshing] = useState(false);
  const {data, loading, error, refetch} = useGetCityById(favoriteCities());

  const setInitialCitiList = async () => {
    const storedCities = await AsyncStorage.getItem('cities');
    if (!storedCities?.length) {
      await AsyncStorage.setItem('cities', JSON.stringify(citiesArray));
      favoriteCities(citiesArray);
    } else {
      favoriteCities(JSON.parse(storedCities));
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  useEffect(() => {
    setInitialCitiList();
  }, []);

  // useEffect(() => {
  //   refetch();
  // }, [isFocused]);

  if (loading) return <Spinner />;

  return (
    <Container>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        data={data}
        renderItem={({item}) => <CitiesMenuItem city={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title={'Cities'} />}
        ListFooterComponent={() => <CitiesItemFooter />}
        ItemSeparatorComponent={() => <Divider />}
        stickyHeaderIndices={[0]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={10}
            progressBackgroundColor="#5856D6"
            colors={['white', 'red', 'orange']}
          />
        }
      />
    </Container>
  );
};

export default HomeScreen;
