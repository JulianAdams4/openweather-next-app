import { Col, Row, Typography } from 'antd';
import { StarFilled } from '@ant-design/icons';

import { FavLocation } from '@app/types';

import SiderItem from '../SiderItem';

const { Title, Text } = Typography;

type SiderProps = {
  locations: FavLocation[];
  weatherBgColor: string;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  onRemoveFav: (cityName: string) => void;
  showFavIcon?: boolean;
};

const Sider = ({
  locations,
  weatherBgColor,
  selectedLocation,
  onSelectLocation,
  onRemoveFav,
  showFavIcon = true,
}: SiderProps) => {
  return (
    <Col
      style={{
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: weatherBgColor,
        overflowY: 'scroll',
        padding: '.5em',
      }}
    >
      <Title
        level={3}
        style={{
          color: '#ffffff',
          fontWeight: 'normal',
          padding: '.6rem .7em',
        }}
      >
        Favoritos
      </Title>

      <Col flex={1} style={{ padding: '1.5em .2em' }}>
        {!locations.length && (
          <>
            <Row>
              <Text
                style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  padding: '.5rem',
                }}
              >
                Aún no has agreagado Favoritos.
              </Text>
            </Row>
            <Row>
              <Text
                style={{
                  fontSize: '1.1rem',
                  color: '#ffffff',
                  padding: '.5rem',
                }}
              >
                Intenta presionando el botón &nbsp;
                <StarFilled style={{ fontSize: 16, color: '#F7BA03' }} /> junto
                al nombre de una ciudad
              </Text>
            </Row>
          </>
        )}

        {locations.map((item, idx) => (
          <Row key={idx}>
            <SiderItem
              item={item}
              onSelectFav={onSelectLocation}
              isSelected={selectedLocation === item.name}
              isLast={idx === locations.length - 1}
              onRemoveFav={onRemoveFav}
              showFavIcon={showFavIcon}
            />
          </Row>
        ))}
      </Col>
    </Col>
  );
};

export default Sider;
