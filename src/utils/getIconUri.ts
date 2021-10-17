import {City} from '../interfaces/City';

const BASE_ICONS_URI = 'http://openweathermap.org/img/wn';

export const getIconUri = (city: City) =>
  `${BASE_ICONS_URI}/${city.weather.summary.icon}@2x.png`;
