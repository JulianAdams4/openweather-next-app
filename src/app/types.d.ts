import { NotificationArgsProps } from 'antd';

type NotificationType = NotificationArgsProps['type'];

export interface WeatherData {
  name: string;
  weather: [
    {
      main: string;
      icon: string;
      description: string;
    },
  ];
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  timezone: number;
}

export type ForecastItemData = {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
  wind: {
    speed: number;
    deg: number;
  };
};

export interface ForecastData {
  city: {
    name: string;
    country: string;
  };
  list: ForecastItemData[];
}

export interface LocalStorageAPI {
  saveItem(key: string, value: any): void;
  getItem(key: string): any | null;
  removeItem(key: string): void;
}

export type ReactMouseEvent =
  | React.MouseEvent<Element, MouseEvent>
  | React.KeyboardEvent<Element>;

export type FavLocation = {
  name: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  weather: string;
  time: number;
};
