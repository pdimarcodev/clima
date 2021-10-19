import React, {useEffect, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AddButton,
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
import {RootStackParams} from '../../navigation/ListTab';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const DetailScreen = ({route}: Props) => {
  const city = route.params;
  const [citiIsAdded, setCitiIsAdded] = useState(false);
  const [favoriteCities, setFavoriteCities] = useState<string[]>([]);

  const checkCitiIsAdded = async () => {
    const storedCities = await AsyncStorage.getItem('cities');
    console.log(storedCities);
    const array = storedCities ? JSON.parse(storedCities) : [];
    setFavoriteCities(array);
    if (array.includes(city.id)) {
      setCitiIsAdded(true);
    }
  };

  const addCity = async () => {
    const newArray = favoriteCities.concat(city.id);
    await AsyncStorage.setItem('cities', JSON.stringify(newArray));
    setFavoriteCities([...favoriteCities, city.id]);
    setCitiIsAdded(true);
  };

  useEffect(() => {
    checkCitiIsAdded();
  }, []);

  return (
    <Container>
      {!citiIsAdded && <AddButton title="Add" onPress={addCity} />}
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
