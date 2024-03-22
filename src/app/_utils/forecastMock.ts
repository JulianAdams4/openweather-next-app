const forecastMock = {
  cod: '200',
  message: 0,
  cnt: 8,
  list: [
    {
      dt: 1711152000,
      main: {
        temp: 29.98,
        feels_like: 34.99,
        temp_min: 26.03,
        temp_max: 29.98,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1008,
        humidity: 70,
        temp_kf: 3.95,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n',
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 1.46,
        deg: 215,
        gust: 2.2,
      },
      visibility: 10000,
      pop: 0.49,
      rain: {
        '3h': 0.35,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-23 00:00:00',
    },
    {
      dt: 1711162800,
      main: {
        temp: 28.44,
        feels_like: 32.69,
        temp_min: 25.37,
        temp_max: 28.44,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1010,
        humidity: 77,
        temp_kf: 3.07,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n',
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 1.22,
        deg: 184,
        gust: 1.38,
      },
      visibility: 10000,
      pop: 0.45,
      rain: {
        '3h': 0.22,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-23 03:00:00',
    },
    {
      dt: 1711173600,
      main: {
        temp: 26.47,
        feels_like: 26.47,
        temp_min: 24.72,
        temp_max: 26.47,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 1.75,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10n',
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.15,
        deg: 176,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0.42,
      rain: {
        '3h': 0.12,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-23 06:00:00',
    },
    {
      dt: 1711184400,
      main: {
        temp: 24.36,
        feels_like: 25.28,
        temp_min: 24.36,
        temp_max: 24.36,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.24,
        deg: 223,
        gust: 1.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2024-03-23 09:00:00',
    },
    {
      dt: 1711195200,
      main: {
        temp: 24.49,
        feels_like: 25.42,
        temp_min: 24.49,
        temp_max: 24.49,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.44,
        deg: 165,
        gust: 0.79,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-23 12:00:00',
    },
    {
      dt: 1711206000,
      main: {
        temp: 28.93,
        feels_like: 33.72,
        temp_min: 28.93,
        temp_max: 28.93,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1011,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.92,
        deg: 221,
        gust: 1.18,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-23 15:00:00',
    },
    {
      dt: 1711216800,
      main: {
        temp: 31.54,
        feels_like: 37.18,
        temp_min: 31.54,
        temp_max: 31.54,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'nubes',
          icon: '04d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.25,
        deg: 224,
        gust: 1.44,
      },
      visibility: 10000,
      pop: 0.05,
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-23 18:00:00',
    },
    {
      dt: 1711227600,
      main: {
        temp: 29.49,
        feels_like: 35.17,
        temp_min: 29.49,
        temp_max: 29.49,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'lluvia ligera',
          icon: '10d',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.03,
        deg: 199,
        gust: 4,
      },
      visibility: 10000,
      pop: 0.51,
      rain: {
        '3h': 0.25,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2024-03-23 21:00:00',
    },
  ],
  city: {
    id: 3657509,
    name: 'Guayaquil',
    coord: {
      lat: -2.1667,
      lon: -79.9,
    },
    country: 'EC',
    population: 1952029,
    timezone: -18000,
    sunrise: 1711106584,
    sunset: 1711150167,
  },
};

export default forecastMock;
