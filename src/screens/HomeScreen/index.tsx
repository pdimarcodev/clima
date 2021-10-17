import React from 'react';
import {FlatList} from 'react-native';
import {
  CitiesItemFooter,
  CitiesMenuItem,
  Divider,
  HeaderTitle,
} from '../../components';
import SafeArea from '../../components/SafeArea';
import Spinner from '../../components/Spinner';
import {useGetCityById} from '../../hooks/useGetCityById';
import {citiesArray} from '../../utils/constants';

const HomeScreen = () => {
  const {data} = useGetCityById(citiesArray);

  if (!data) return <Spinner />;

  return (
    <SafeArea>
      <FlatList
        data={data}
        renderItem={({item}) => <CitiesMenuItem city={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title={'Cities'} />}
        ListFooterComponent={() => <CitiesItemFooter />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeArea>
  );
};

export default HomeScreen;
