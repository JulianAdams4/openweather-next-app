import { FavLocation } from '@project/next-env';

import {
  API_FORECAST_BASE_URL,
  API_WEATHER_BASE_URL,
  LIMIT_FORECAST_ITEMS_3H,
  OPENWEATHER_API_KEY,
} from './constants';

export const buildWeatherApiUrl = (cityName: string): string => {
  return `${API_WEATHER_BASE_URL}?q=${cityName}&appid=${OPENWEATHER_API_KEY}&lang=es&units=metric`;
};

export const buildForecastApiUrl = (cityName: string): string => {
  return `${API_FORECAST_BASE_URL}?q=${cityName}&appid=${OPENWEATHER_API_KEY}&lang=es&units=metric&cnt=${LIMIT_FORECAST_ITEMS_3H}`;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const isInFavLocations = (
  savedLocations: FavLocation[],
  cityName: string
): boolean => {
  if (!cityName || !savedLocations || !savedLocations.length) {
    return false;
  }
  return savedLocations.some(
    (location: FavLocation) => location.name === cityName
  );
};

export const sortByName = (favLocations: FavLocation[]): FavLocation[] => {
  return favLocations.sort((a: FavLocation, b: FavLocation) =>
    a.name.localeCompare(b.name)
  );
};

export const roundTemperature = (temp: number): string => {
  return `${parseInt(`${temp}`, 10)}° C`;
};
