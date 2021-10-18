import {City} from '../interfaces/City';

export const getWindSpeed = (city: City) => Math.round(city.weather.wind.speed);
