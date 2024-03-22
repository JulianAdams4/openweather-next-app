import { useMemo, useState } from 'react';
import { Col, Row, Typography } from 'antd';
import { MY_LOCATION } from '@app/_utils/constants';
import { FavLocation } from '@project/next-env';

import RemoveFavItemButton from '../RemoveFavItemButton';
import './styles.css';
import { roundTemperature } from '../../_utils/text';
import { isMoreThan3Hours, parseTimestamp } from '../../_utils/time';

const { Text, Title } = Typography;

type SiderItemProps = {
  item: FavLocation;
  isSelected: boolean;
  isLast: boolean;
  onSelectFav: (name: string) => void;
  onRemoveFav: (name: string) => void;
};

const SiderItem = ({
  item,
  onSelectFav,
  onRemoveFav,
  isLast = false,
  isSelected = false,
}: SiderItemProps) => {
  const mainStyle = {
    padding: '.5em 1.2em',
    ...(!isLast ? { borderBottom: '1px solid rgba(255, 255, 255, 0.35)' } : {}),
    ...(isSelected ? { backgroundColor: 'rgba(255,255,255,0.18)' } : {}),
  };

  const isOutdated = useMemo(
    () => isMoreThan3Hours(Date.now() + 18000, item.time * 1000),
    [item?.time]
  );

  return (
    <Col flex={1} style={mainStyle}>
      <Row
        align='top'
        justify='space-between'
        onClick={() => onSelectFav(item.name)}
        title='Seleccionar ubicación'
        style={{
          cursor: 'pointer',
        }}
      >
        <Col>
          <Row align='middle'>
            <Text
              strong
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '1rem',
              }}
            >
              {item.name}
            </Text>
            <RemoveFavItemButton
              cityName={item.name}
              onRemoveFav={onRemoveFav}
            />
          </Row>
          <Row>
            {item.time && (
              <Text
                strong
                style={{
                  lineHeight: '10px',
                  color: isOutdated ? '#F90003' : 'rgba(255,255,255,0.7)',
                }}
              >
                {`A las ${parseTimestamp(item.time).split(' ')[1]} ${isOutdated ? '(Desactualizado)' : ''}`}
              </Text>
            )}
            {item.name === MY_LOCATION && (
              <Text
                strong
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: '10px',
                }}
              >
                &nbsp;&nbsp;-&nbsp;&nbsp;Mi ubicación
              </Text>
            )}
          </Row>
        </Col>
        <Col>
          <Title
            level={2}
            style={{ color: 'rgba(255,255,255,0.8)', fontWeight: 'normal' }}
          >
            {roundTemperature(item.temp)}
          </Title>
        </Col>
      </Row>

      <Row justify='space-between' style={{ marginTop: 5 }}>
        <Text strong style={{ color: 'rgba(255,255,255,0.56)' }}>
          {item.weather}
        </Text>
        <Text strong style={{ color: 'rgba(255,255,255,0.56)' }}>
          Min: {item.temp_min} / Max: {item.temp_max}
        </Text>
      </Row>
    </Col>
  );
};

export default SiderItem;
