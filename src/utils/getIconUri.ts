const BASE_ICONS_URI = 'http://openweathermap.org/img/wn';

export const getIconUri = (iconId: string) =>
  `${BASE_ICONS_URI}/${iconId}@2x.png`;
