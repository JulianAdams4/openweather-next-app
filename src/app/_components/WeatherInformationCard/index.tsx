import Image from 'next/image';
import { Row, Typography } from 'antd';

import { WeatherData } from '@app/types';
import { capitalizeFirstLetter, roundTemperature } from '@app/_utils/text';

import RemoveFavItemButton from '../RemoveFavItemButton';
import AddFavItemButton from '../AddFavItemButton';

const { Title, Text } = Typography;

type WeatherInformationCardProps = {
  currentWeather: WeatherData;
  isFavLocation: boolean;
  onAddFav: (locationData: WeatherData) => void;
  onRemoveFav: (cityName: string) => void;
};

const WeatherInformationCard = ({
  currentWeather,
  isFavLocation,
  onAddFav,
  onRemoveFav,
}: WeatherInformationCardProps) => {
  return (
    <Row
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '1em 0em',
        textAlign: 'center',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <Title
        level={1}
        style={{
          color: '#ffffff',
          display: 'flex',
          justifyContent: 'center',
          lineHeight: 1,
          marginLeft: '3rem',
        }}
      >
        {currentWeather.name} &nbsp;
        <span style={{ fontSize: '1.3rem' }}>{currentWeather.sys.country}</span>
        &nbsp;
        {isFavLocation ? (
          <RemoveFavItemButton
            size={24}
            cityName={currentWeather.name}
            onRemoveFav={onRemoveFav}
          />
        ) : (
          <AddFavItemButton locationData={currentWeather} onAddFav={onAddFav} />
        )}
      </Title>

      <Title
        level={1}
        style={{
          margin: 0,
          color: '#ffffff',
          fontWeight: 'normal',
          fontSize: '3.3rem',
        }}
      >
        {roundTemperature(currentWeather.main.temp)}
      </Title>

      <Text
        style={{
          fontSize: '1.5em',
          color: '#ffffff',
        }}
      >
        <Image
          width={60}
          height={40}
          src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`}
          alt={currentWeather.weather[0].icon}
          style={{
            margin: '0 auto',
            marginTop: '-10px',
            marginBottom: '-20px',
          }}
        />
        {capitalizeFirstLetter(currentWeather.weather[0].description)}
      </Text>

      <Text style={{ fontSize: '1.4em', color: '#ffffff', lineHeight: '1em' }}>
        {`Mínima: ${roundTemperature(currentWeather.main.temp_min)} /  Máxima: ${roundTemperature(currentWeather.main.temp_max)}`}
      </Text>
    </Row>
  );
};

export default WeatherInformationCard;
