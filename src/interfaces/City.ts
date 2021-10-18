interface IObjectKeys {
  [key: string]: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Temperature extends IObjectKeys {
  actual: number;
  feelsLike: number;
  min: number;
  max: number;
}

export interface Clouds {
  all: number;
  visibility: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface WeatherSummary {
  title: string;
  description: string;
  icon: string;
}

export interface Weather {
  summary: WeatherSummary;
  timestamp: number;
  temperature: Temperature;
  clouds: Clouds;
  wind: Wind;
}

export interface City {
  id: string;
  name: string;
  country: string;
  coord: Coordinates;
  weather: Weather;
}

export interface CityByIdResponse {
  getCityById?: City[];
}

export interface CityByNameResponse {
  getCityByName?: City;
}
