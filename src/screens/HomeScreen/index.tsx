import React, {useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl} from 'react-native';
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

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const {data, loading, error, refetch} = useGetCityById(favoriteCities());

  const setInitialCitiList = async () => {
    const storedCities = await AsyncStorage.getItem('cities');
    if (!storedCities?.length) {
      try {
        await AsyncStorage.setItem('cities', JSON.stringify(citiesArray));
        favoriteCities(citiesArray);
      } catch (error: any) {
        Alert.alert(error.message);
      }
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

  useEffect(() => {
    error && Alert.alert(error.message);
  }, [error]);

  if (loading) return <Spinner />;

  return (
    <Container>
      <FlatList
        testID="citi-list"
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
            progressBackgroundColor="blue"
            colors={['white', 'red', 'orange']}
          />
        }
      />
    </Container>
  );
};

export default HomeScreen;
