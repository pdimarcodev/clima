import React from 'react';
import {FlatList} from 'react-native';
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
  const {data} = useGetCityById(citiesArray);

  if (!data) return <Spinner />;

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
