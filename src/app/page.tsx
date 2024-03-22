'use client';

import React, {
  createContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Col, Layout, notification, Row } from 'antd';

import DespejadoBg from '@assets/despejado.jpeg';
import LLuviaBg from '@assets/lluvia.jpg';
import NieveBg from '@assets/nieve.jpeg';
import NubladoBg from '@assets/nublado.jpeg';
import TormentaBg from '@assets/tormenta.jpeg';
import LocalStorageService from '@app/_services/localStorage';
import {
  FavLocation,
  ForecastData,
  NotificationType,
  WeatherData,
} from '@app/types';
import {
  getBakgroundColorAndImageByWeather,
  isDayOrNight,
} from '@app/_utils/weather';
import {
  buildForecastApiUrl,
  buildWeatherApiUrl,
  capitalizeFirstLetter,
  isInFavLocations,
  sortByName,
} from '@app/_utils/text';
import {
  FAV_LOCATIONS_STORAGE_KEY,
  MIN_LENGTH_FOR_SEARCHING,
  MY_LOCATION,
} from '@app/_utils/constants';

import SiderPage from './_components/Sider';
import SplashScreen from './_components/SplashScreen';
import Header from './_components/Header';
import ResponsiveDrawer from './_components/ResponsiveDrawer';
import MainContent from './_components/Main';

const Context = createContext({ name: 'Notifications' });

export default function Home() {
  const lastLocation = useRef('');
  const localStorageAPI = new LocalStorageService();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string>(MY_LOCATION);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | undefined>(
    undefined
  );
  const [currentForecast, setCurrentForecast] = useState<
    ForecastData | undefined
  >(undefined);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [locationsReloadKey, setLocationsReloadKey] = useState<string>('');

  const notificationsContextValue = useMemo(() => ({ name: 'Ant Design' }), []);
  const [notificationsApi, notificationsContextHolder] =
    notification.useNotification();

  const favLocations = useMemo(
    () => localStorageAPI.getItem(FAV_LOCATIONS_STORAGE_KEY) || [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [locationsReloadKey]
  );

  const sendNotification = (
    type: NotificationType = 'info',
    message: string = 'Información',
    description: string = 'Algo salió mal'
  ) => {
    notificationsApi[type]({
      message,
      description: (
        <Context.Consumer>{({ name }) => `${description}`}</Context.Consumer>
      ),
      placement: 'topRight',
      duration: 2500,
    });
  };

  const fetchWeather = async () => {
    if (selectedLocation) {
      const res = await fetch(buildWeatherApiUrl(selectedLocation));
      if (res.ok) {
        const data: WeatherData = await res.json();
        setCurrentWeather(data);
        lastLocation.current = selectedLocation;
        if (isInFavLocations(favLocations, data.name)) {
          onAddFavLocation(data, false);
        }
      } else if (res.status === 404) {
        sendNotification('error', 'Error', 'Ciudad no encontrada');
        setSelectedLocation(lastLocation.current);
      }
    } else {
      sendNotification('error', 'Error', 'Debe ingresar una ciudad');
      setSelectedLocation(lastLocation.current);
    }
  };

  const fetchForecast = async () => {
    if (selectedLocation) {
      const res = await fetch(buildForecastApiUrl(selectedLocation));
      if (res.ok) {
        const forecastData: ForecastData = await res.json();
        setCurrentForecast(forecastData);
      }
    }
  };

  const onOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const onSelectLocation = (favLocation: string) => {
    if (selectedLocation.length >= MIN_LENGTH_FOR_SEARCHING) {
      setSelectedLocation(favLocation);
    } else {
      sendNotification('error', 'Error', 'Debe ingresar al menos 3 caracteres');
    }
  };

  const onAddFavLocation = (
    locationData: WeatherData,
    showMessage: boolean = true
  ) => {
    const updatedFavLocations = [
      ...favLocations.filter(
        (loc: FavLocation) => loc.name !== locationData.name
      ),
      {
        name: locationData.name,
        temp: locationData.main.temp,
        temp_min: locationData.main.temp_min,
        temp_max: locationData.main.temp_max,
        weather: capitalizeFirstLetter(locationData.weather[0].description),
        time: locationData.dt,
      },
    ];
    localStorageAPI.saveItem(FAV_LOCATIONS_STORAGE_KEY, updatedFavLocations);
    setLocationsReloadKey(`${Date.now()}`);
    if (showMessage) {
      sendNotification('success', 'Éxito', 'Se agregó a Favoritos');
    }
  };

  const onRemoveFavLocation = (cityName: string) => {
    const updatedFavLocations = favLocations.filter(
      (location: FavLocation) => location.name !== cityName
    );
    localStorageAPI.saveItem(FAV_LOCATIONS_STORAGE_KEY, updatedFavLocations);
    sendNotification('success', 'Éxito', 'Se eliminó de Favoritos');
    setLocationsReloadKey(`${Date.now()}`);
  };

  useEffect(() => {
    if (
      selectedLocation &&
      selectedLocation.length >= MIN_LENGTH_FOR_SEARCHING
    ) {
      setIsSearching(true);
      fetchWeather().then(() => {
        setIsSearching(false);
        fetchForecast();
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLocation]);

  useEffect(() => {
    setLocationsReloadKey(`${Date.now()}`);
    fetchWeather().then(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNightOrDay = useMemo(
    () => isDayOrNight(currentWeather),
    [currentWeather]
  );

  const [getBackgroundUrl, weatherBgColor] = useMemo(
    () =>
      getBakgroundColorAndImageByWeather(
        [
          DespejadoBg.src,
          NubladoBg.src,
          LLuviaBg.src,
          TormentaBg.src,
          NieveBg.src,
        ],
        getNightOrDay,
        currentWeather
      ),
    [currentWeather, getNightOrDay]
  );

  return (
    <Context.Provider value={notificationsContextValue}>
      {isLoading && <SplashScreen />}

      {notificationsContextHolder}

      <Layout
        style={{
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Row style={{ flex: 1 }}>
          <Col xs={0} sm={10} md={8} lg={6} xl={5}>
            <SiderPage
              locations={sortByName(favLocations)}
              weatherBgColor={weatherBgColor}
              selectedLocation={selectedLocation}
              onSelectLocation={onSelectLocation}
              onRemoveFav={onRemoveFavLocation}
            />
          </Col>
          <ResponsiveDrawer
            openDrawer={openDrawer}
            locations={sortByName(favLocations)}
            onCloseDrawer={onCloseDrawer}
            weatherBgColor={weatherBgColor}
            selectedLocation={selectedLocation}
            onSelectLocation={onSelectLocation}
            onRemoveFav={onRemoveFavLocation}
          />

          <Col
            xs={24}
            sm={14}
            md={16}
            lg={18}
            xl={19}
            style={{
              backgroundImage: `url(${getBackgroundUrl})`,
              backgroundPosition: '50% 0',
              backgroundSize: 'cover',
            }}
          >
            <Header
              loading={isSearching}
              onOpenDrawer={onOpenDrawer}
              setLocation={setSelectedLocation}
            />

            <MainContent
              currentWeather={currentWeather}
              currentForecast={currentForecast}
              onAddFav={onAddFavLocation}
              onRemoveFav={onRemoveFavLocation}
              isFavLocation={isInFavLocations(favLocations, selectedLocation)}
            />
          </Col>
        </Row>
      </Layout>
    </Context.Provider>
  );
}
