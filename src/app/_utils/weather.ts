import { WeatherData } from '@app/types';
import { parseTimestamp } from '@app/_utils/time';
import { SIDER_BG_COLORS, WEATHER_MAIN } from '@app/_utils/constants';

export const isDayOrNight = (currentWeather?: WeatherData): string => {
  if (currentWeather?.dt) {
    const hour: string = parseTimestamp(currentWeather?.dt)
      .split(' ')[1]
      .replace(':', '');
    return hour > '1800' || hour < '0600' ? 'NIGHT' : 'DAY';
  }
  return 'DAY';
};

export const getBakgroundColorAndImageByWeather = (
  [
    DespejadoBgSrc,
    NubladoBgSrc,
    LLuviaBgSrc,
    TormentaBgSrc,
    NieveBgSrc,
  ]: string[],
  dayOrNight: string,
  currentWeather?: WeatherData
): [string, string] => {
  if (currentWeather?.weather && dayOrNight) {
    const weatherMain = currentWeather?.weather[0].main.toUpperCase();
    if (WEATHER_MAIN._GROUPS.CLEAR.includes(weatherMain)) {
      const clearColors: Record<string, string> = SIDER_BG_COLORS.CLEAR;
      return [DespejadoBgSrc, clearColors[dayOrNight]];
    }
    if (WEATHER_MAIN._GROUPS.THUNDERSTORM.includes(weatherMain)) {
      const rainColors: Record<string, string> = SIDER_BG_COLORS.RAIN;
      return [TormentaBgSrc, rainColors[dayOrNight]];
    }
    if (
      WEATHER_MAIN._GROUPS.DRIZZLE.includes(weatherMain) ||
      WEATHER_MAIN._GROUPS.RAIN.includes(weatherMain)
    ) {
      const rainColors: Record<string, string> = SIDER_BG_COLORS.RAIN;
      return [LLuviaBgSrc, rainColors[dayOrNight]];
    }
    if (WEATHER_MAIN._GROUPS.SNOW.includes(weatherMain)) {
      const snowColors: Record<string, string> = SIDER_BG_COLORS.SNOW;
      return [NieveBgSrc, snowColors[dayOrNight]];
    }
    if (
      WEATHER_MAIN._GROUPS.CLOUDS.includes(weatherMain) ||
      WEATHER_MAIN._GROUPS.ATMOSPHERE.includes(weatherMain)
    ) {
      const cloudsColors: Record<string, string> = SIDER_BG_COLORS.CLOUDS;
      return [NubladoBgSrc, cloudsColors[dayOrNight]];
    }
  }
  const defaultColors: Record<string, string> = SIDER_BG_COLORS.SNOW;
  return [DespejadoBgSrc, defaultColors[dayOrNight]];
};
