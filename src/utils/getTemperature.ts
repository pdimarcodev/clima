import {City} from '../interfaces/City';

export const getTemperature = (city: City) =>
  Math.round(city.weather.temperature.actual);
