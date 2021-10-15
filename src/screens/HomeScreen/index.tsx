import React from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CitiesItemFooter,
  CitiesMenuItem,
  Divider,
  HeaderTitle,
} from '../../components';
import Spinner from '../../components/Spinner';
import {useGetCityById} from '../../hooks/useGetCityById';
import {citiesArray} from '../../utils/constants';
import {styles} from './styles';

const HomeScreen = () => {
  const {data} = useGetCityById(citiesArray);

  if (!data) return <Spinner />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={data}
        renderItem={({item}) => <CitiesMenuItem city={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title={'Cities'} />}
        ListFooterComponent={() => <CitiesItemFooter />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
