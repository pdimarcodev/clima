import React from 'react';
import {FlatList, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetCityById} from '../../hooks/useGetCityById';
import {citiesArray} from '../../utils/constants';

const HomeScreen = () => {
  const {data} = useGetCityById(citiesArray);

  console.log(data);

  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        {/* <FlatList
          data={data}
          renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
          keyExtractor={item => item.name}
          // ListHeaderComponent={() => <HeaderTitle title={'Home Options'} />}
          // ItemSeparatorComponent={() => <Divider />}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
