import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  City,
  Container,
  Data,
  Temperature,
  WeatherIcon,
  WindArrow,
  WindDataContainer,
} from './styles';
import {getTemperature} from '../../utils/getTemperature';
import {getIconUri} from '../../utils/getIconUri';
import {getWindSpeed} from '../../utils/getWindSpeed';
import {RootStackParams} from '../../navigation/listTab';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const city = route.params;

  return (
    <Container>
      <Temperature>{getTemperature(city, 'actual')}°</Temperature>
      <WeatherIcon source={{uri: getIconUri(city)}} />
      <City>{city.name}</City>
      <Data>Min: {getTemperature(city, 'min')}°</Data>
      <Data>Max: {getTemperature(city, 'max')}°</Data>
      <Data>Feels like: {getTemperature(city, 'feelsLike')}°</Data>
      <Data>Humidity: {city.weather.clouds.humidity}%</Data>
      <WindDataContainer>
        <Data>Wind: {getWindSpeed(city)} kn</Data>
        <WindArrow
          name="arrow-up-sharp"
          size={40}
          deg={city.weather.wind.deg}
        />
      </WindDataContainer>
    </Container>
  );
};

export default DetailScreen;
