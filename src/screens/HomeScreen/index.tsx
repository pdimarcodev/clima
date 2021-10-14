import React from 'react';
import {FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CitiesMenuItem} from '../../components';
import {useGetCityById} from '../../hooks/useGetCityById';
import {citiesArray} from '../../utils/constants';

const HomeScreen = () => {
  const {data} = useGetCityById(citiesArray);

  if (!data) return null;

  return (
    <SafeAreaView>
      <View
      // style={{flex: 1}}
      >
        <FlatList
          data={data}
          renderItem={({item}) => <CitiesMenuItem city={item} />}
          keyExtractor={item => item.id}
          // ListHeaderComponent={() => <HeaderTitle title={'Home Options'} />}
          // ItemSeparatorComponent={() => <Divider />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
