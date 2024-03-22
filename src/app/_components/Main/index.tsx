import Image from 'next/image';
import { Col, Grid, Row, Typography } from 'antd';

import DirectionIcon from '@assets/direction.svg';
import { HEADER_HEIGHT } from '@app/_utils/constants';
import { ForecastData, ForecastItemData, WeatherData } from '@app/types';

import { roundTemperature } from '../../_utils/text';
import WeatherInformationCard from '../WeatherInformationCard';
import { parseTimestamp } from '../../_utils/time';

const { Text } = Typography;
const { useBreakpoint } = Grid;

type DirectionIconBaseProps = {
  deg: number;
};
const DirectionIconBase = ({ deg }: DirectionIconBaseProps) => (
  <Image
    width={60}
    height={60}
    alt='Dirección'
    src={DirectionIcon}
    style={{
      filter: 'invert(100%) contrast(200%)',
      position: 'relative',
      margin: '0 .85em 0 auto',
      rotate: `${50 - deg}deg`,
    }}
  />
);

const ForecastCardProps: React.CSSProperties = {
  width: '145px',
  height: '170px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  backgroundColor: 'rgba(0,0,0,0.25)',
  padding: '.5rem 1.6rem',
  borderRadius: '1.2rem',
  userSelect: 'none',
};

type MainProps = {
  currentWeather?: WeatherData;
  currentForecast?: ForecastData;
  isFavLocation: boolean;
  onAddFav: (locationData: WeatherData) => void;
  onRemoveFav: (cityName: string) => void;
};

const Main = ({
  currentWeather,
  currentForecast,
  isFavLocation,
  onAddFav,
  onRemoveFav,
}: MainProps) => {
  const screens = useBreakpoint();
  const isMobile =
    screens.xs && Object.values(screens).filter(Boolean).length === 1;

  return (
    <Row
      justify='center'
      style={{
        flex: 1,
        height: '100%',
        maxHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
      }}
    >
      {currentWeather && (
        <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
          <WeatherInformationCard
            currentWeather={currentWeather}
            isFavLocation={isFavLocation}
            onAddFav={onAddFav}
            onRemoveFav={onRemoveFav}
          />

          <Row
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              ...(isMobile
                ? {
                    flexDirection: 'column',
                    maxWidth: '100%',
                    overflowX: 'hidden',
                    margin: '2rem 1rem',
                    overflowY: 'hidden',
                  }
                : {
                    flexDirection: 'row',
                    maxWidth: '75vw',
                    overflowX: 'scroll',
                    margin: '5rem 2rem',
                  }),
            }}
          >
            {currentForecast?.list &&
              currentForecast.list.map(
                (forecastItem: ForecastItemData, idx: number) => {
                  const [forecastDate, forecastTime] = parseTimestamp(
                    forecastItem.dt
                  ).split(' ');
                  return (
                    <Col
                      key={`forecast-item-${idx}`}
                      style={{
                        display: 'flex',
                        ...(isMobile
                          ? {
                              flexDirection: 'row',
                            }
                          : {
                              flexDirection: 'column',
                              marginLeft: '1rem',
                            }),
                      }}
                    >
                      <div
                        style={{
                          ...ForecastCardProps,
                          marginBottom: '1rem',
                          justifyContent: 'space-around',
                          ...(isMobile
                            ? {
                                padding: '0.5em',
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                paddingLeft: '1rem',
                              }
                            : {
                                padding: 0,
                              }),
                        }}
                      >
                        <Text
                          style={{
                            color: '#ffffff',
                            fontSize: '1.1rem',
                            marginTop: '.53rem',
                            textAlign: isMobile ? 'right' : 'center',
                          }}
                        >
                          {isMobile
                            ? forecastDate.split('/').join(' / ')
                            : `${forecastDate.split('/').join(' / ')} ${forecastTime}`}
                        </Text>
                        <Text
                          style={{
                            color: '#ffffff',
                            marginTop: '-5px',
                            marginBottom: '-5px',
                          }}
                        >
                          <Image
                            width={60}
                            height={40}
                            src={`http://openweathermap.org/img/w/${forecastItem.weather[0].icon}.png`}
                            alt={forecastItem.weather[0].description}
                            style={{ margin: '0 auto' }}
                          />
                        </Text>
                        <Text style={{ color: '#ffffff', fontSize: '1.1rem' }}>
                          {roundTemperature(forecastItem.main.temp)}
                          <br />
                          <p
                            style={{ color: 'lightgray', margin: 0 }}
                          >{`${roundTemperature(forecastItem.main.temp_min)} - ${roundTemperature(forecastItem.main.temp_max)}`}</p>
                        </Text>
                      </div>

                      <div
                        style={{
                          ...ForecastCardProps,
                          justifyContent: 'space-around',
                          ...(isMobile
                            ? {
                                padding: '0.5em',
                                paddingRight: '1rem',
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0,
                              }
                            : {
                                padding: 0,
                              }),
                        }}
                      >
                        <Text
                          style={{
                            color: '#ffffff',
                            fontSize: '1.1rem',
                            textAlign: isMobile ? 'left' : 'center',
                          }}
                        >
                          {isMobile
                            ? forecastTime
                            : `${forecastDate.split('/').join(' / ')} ${forecastTime}`}
                        </Text>
                        <Text
                          style={{ color: '#ffffff', margin: '-10px auto' }}
                        >
                          <DirectionIconBase deg={forecastItem.wind.deg} />
                        </Text>
                        <Text
                          style={{
                            color: '#ffffff',
                            marginTop: '-10px',
                            fontSize: '1.1rem',
                          }}
                        >
                          {`${forecastItem.wind.speed} km/h`}
                        </Text>
                      </div>
                    </Col>
                  );
                }
              )}
          </Row>
        </Col>
      )}
    </Row>
  );
};

export default Main;
