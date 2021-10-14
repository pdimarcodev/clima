import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {City} from '../../interfaces/City';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import {styles} from './styles';
import {Spacer} from '..';

interface Props {
  city: City;
}

const CitiesMenuItem: FC<Props> = ({city}) => {
  const navigation = useNavigation();

  console.log(city?.name);

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <View style={styles.container}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.itemText}>
          {city.name}
        </Text>
        <Spacer />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.text.secondary}
          size={23}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CitiesMenuItem;
