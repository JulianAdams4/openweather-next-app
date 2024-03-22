import { useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';

import { MAX_LENGTH_CITY_NAME_INPUT } from '@app/_utils/constants';
import './styles.css';

type HeaderProps = {
  loading: boolean;
  onOpenDrawer: (e: React.MouseEvent<HTMLElement>) => void;
  setLocation: (location: string) => void;
};

const Header = ({ loading, onOpenDrawer, setLocation }: HeaderProps) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Row
      style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        paddingInline: '1em',
      }}
    >
      <Col xs={2} sm={0}>
        <Button
          type='link'
          size='large'
          icon={<MenuOutlined />}
          onClick={onOpenDrawer}
          style={{ color: '#ffffff' }}
          disabled={loading}
        />
      </Col>

      <Col
        xs={22}
        sm={24}
        style={{ display: 'flex', flexDirection: 'row-reverse' }}
      >
        <Col xs={19} sm={16} md={11} lg={8} xl={5}>
          <Input
            allowClear
            size='large'
            variant='borderless'
            placeholder='Ingresa una ciudad'
            onPressEnter={(e) => setLocation(inputValue)}
            onChange={(e) => setInputValue(e.target.value)}
            count={{ show: true, max: MAX_LENGTH_CITY_NAME_INPUT }}
            maxLength={MAX_LENGTH_CITY_NAME_INPUT}
            classNames={{
              input: 'search-input-input',
              count: 'search-input-count',
            }}
            prefix={
              <SearchOutlined style={{ marginRight: 10, opacity: 0.5 }} />
            }
            style={{
              color: '#ffffff',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
            }}
            disabled={loading}
          />
        </Col>
      </Col>
    </Row>
  );
};

export default Header;
