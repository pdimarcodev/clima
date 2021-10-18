import {City} from '../interfaces/City';

export const getTemperature = (city: City, type: string) =>
  Math.round(city.weather.temperature[type]);
