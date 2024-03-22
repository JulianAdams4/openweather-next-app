export const HEADER_HEIGHT = 64;

export const MY_LOCATION = process.env.NEXT_PUBLIC_DEFAULT_LOCATION || 'Oslo';

export const OPENWEATHER_API_KEY =
  process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || '';

export const FAV_LOCATIONS_STORAGE_KEY = 'favLocations';

export const API_WEATHER_BASE_URL =
  'https://api.openweathermap.org/data/2.5/weather';

export const API_FORECAST_BASE_URL =
  'https://api.openweathermap.org/data/2.5/forecast';

export const LIMIT_FORECAST_ITEMS_3H = 8; // 8 * 3h = 24h

export const MIN_LENGTH_FOR_SEARCHING = 3;

export const MAX_LENGTH_CITY_NAME_INPUT = 30;

export const MONTHS: string[] = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
];

export const SIDER_BG_COLORS = {
  CLEAR: {
    DAY: '#4985AA',
    NIGHT: '#181C2E',
  },
  CLOUDS: {
    DAY: '#377CA6',
    NIGHT: '#181C21',
  },
  SNOW: {
    DAY: '#5B6D7D',
    NIGHT: '#272B2D',
  },
  RAIN: {
    DAY: '#5D7C8B',
    NIGHT: '#15161E',
  },
};

export const WEATHER_MAIN = {
  ASH: 'ASH',
  CLEAR: 'CLEAR',
  CLOUDS: 'CLOUDS',
  DRIZZLE: 'DRIZZLE',
  DUST: 'DUST',
  FOG: 'FOG',
  HAZE: 'HAZE',
  MIST: 'MIST',
  RAIN: 'RAIN',
  SAND: 'SAND',
  SMOKE: 'SMOKE',
  SNOW: 'SNOW',
  SQUALL: 'SQUALL',
  THUNDERSTORM: 'THUNDERSTORM',
  TORNADO: 'TORNADO',
  _GROUPS: {
    ATMOSPHERE: [
      'MIST',
      'SMOKE',
      'DUST',
      'HAZE',
      'FOG',
      'SAND',
      'ASH',
      'SQUALL',
      'TORNADO',
    ],
    CLEAR: ['CLEAR'],
    CLOUDS: ['CLOUDS'],
    DRIZZLE: ['DRIZZLE'],
    RAIN: ['RAIN'],
    SNOW: ['SNOW'],
    THUNDERSTORM: ['THUNDERSTORM'],
  },
};
