import { Col, Row, Typography } from 'antd';
import { HEADER_HEIGHT } from '@app/_utils/constants';
import { WeatherData } from '@project/next-env';

import RemoveFavItemButton from '../RemoveFavItemButton';
import AddFavItemButton from '../AddFavItemButton';
import { capitalizeFirstLetter, roundTemperature } from '../../_utils/text';
import './styles.css';

const { Title, Text } = Typography;

type MainProps = {
  data?: WeatherData;
  isFavLocation: boolean;
  onAddFav: (locationData: WeatherData) => void;
  onRemoveFav: (cityName: string) => void;
};

const Main = ({ data, isFavLocation, onAddFav, onRemoveFav }: MainProps) => {
  return (
    <Row
      justify='center'
      style={{
        flex: 1,
        height: '100%',
        maxHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
      }}
    >
      {data && (
        <>
          <Col
            xs={24}
            sm={18}
            md={12}
            lg={8}
            style={{
              padding: '1em 0em',
              textAlign: 'center',
              borderRadius: '1em',
              maxWidth: '450px',
              maxHeight: '175px',
            }}
          >
            <Title
              level={1}
              style={{
                color: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                lineHeight: 1,
                marginLeft: 10,
              }}
            >
              {data.name} &nbsp;
              <span style={{ fontSize: '1.3rem' }}>{data.sys.country}</span>
              &nbsp;
              {isFavLocation ? (
                <RemoveFavItemButton
                  size={24}
                  cityName={data.name}
                  onRemoveFav={onRemoveFav}
                />
              ) : (
                <AddFavItemButton locationData={data} onAddFav={onAddFav} />
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
              {roundTemperature(data.main.temp)}
            </Title>

            <Text
              style={{
                fontSize: '1.7em',
                color: '#ffffff',
              }}
            >
              {capitalizeFirstLetter(data.weather[0].description)}
            </Text>
            <br />

            <Text
              style={{ fontSize: '1.5em', color: '#ffffff', lineHeight: '1em' }}
            >
              {`Mínima: ${roundTemperature(data.main.temp_min)} /  Máxima: ${roundTemperature(data.main.temp_max)}`}
            </Text>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Main;
