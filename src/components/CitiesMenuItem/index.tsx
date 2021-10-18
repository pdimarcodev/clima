import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {City} from '../../interfaces/City';
import {
  Chevron,
  CitiText,
  Container,
  TemperatureText,
  WeatherIcon,
} from './styles';
import {Spacer} from '../../components';
import {getIconUri} from '../../utils/getIconUri';
import {getTemperature} from '../../utils/getTemperature';

interface Props {
  city: City;
}

const CitiesMenuItem: FC<Props> = ({city}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.dispatch(CommonActions.navigate('DetailScreen', city))
      }>
      <Container>
        <CitiText>{city.name}</CitiText>
        <WeatherIcon source={{uri: getIconUri(city)}} />
        <TemperatureText>{getTemperature(city, 'actual')}°</TemperatureText>
        <Spacer />
        <Chevron name="chevron-forward-outline" size={40} />
      </Container>
    </TouchableOpacity>
  );
};

export default CitiesMenuItem;
