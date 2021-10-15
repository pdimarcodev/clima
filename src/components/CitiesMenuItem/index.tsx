import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {City} from '../../interfaces/City';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import {styles} from './styles';
import {Spacer} from '..';
import {getIconUri} from '../../utils/getIconUri';
import {getTemperature} from '../../utils/getTemperature';

interface Props {
  city: City;
}

const CitiesMenuItem: FC<Props> = ({city}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
      <View style={styles.container}>
        <Text style={styles.cityText}>{city.name}</Text>
        <Image
          style={styles.icon}
          source={{uri: getIconUri(city.weather.summary.icon)}}
        />
        <Text style={styles.temperatureText}>{getTemperature(city)}°</Text>

        <Spacer />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.text.secondary}
          size={40}
          style={styles.chevron}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CitiesMenuItem;
