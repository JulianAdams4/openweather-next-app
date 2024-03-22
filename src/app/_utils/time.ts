import { MONTHS } from './constants';

export const parseTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const day = ('0' + date.getDate()).slice(-2);
  const month = MONTHS[date.getMonth()];
  const hours = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);
  return `${day}/${month} ${hours}:${minutes}`;
};

export const isMoreThan3Hours = (
  timestamp1: number,
  timestamp2: number
): boolean => {
  const horasEnMilisegundos = 3 * 60 * 60 * 1000;
  return Math.abs(timestamp1 - timestamp2) > horasEnMilisegundos;
};
