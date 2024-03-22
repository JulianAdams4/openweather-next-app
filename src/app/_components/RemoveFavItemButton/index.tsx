import { Button, Col, Popconfirm, Typography } from 'antd';
import { StarFilled, WarningFilled } from '@ant-design/icons';

const { Text } = Typography;

const TITLE = 'Quitar de favoritos';

const DESCRIPTION_TEXT = [
  '¿Estás seguro de que quieres ',
  'remover esta ubicación?',
];

type RemoveFavItemButtonProps = {
  cityName: string;
  loading?: boolean;
  onRemoveFav: (cityName: any) => void;
  size?: number;
};

const RemoveFavItemButton = ({
  cityName,
  loading,
  onRemoveFav,
  size = 16,
}: RemoveFavItemButtonProps) => {
  return (
    <Popconfirm
      placement='right'
      title={TITLE}
      description={
        <Col>
          <Text>{DESCRIPTION_TEXT[0]}</Text> <br />
          <Text>{DESCRIPTION_TEXT[1]}</Text>
        </Col>
      }
      icon={<WarningFilled style={{ color: 'red' }} />}
      okText='Sí, estoy seguro'
      okType='danger'
      onConfirm={() => onRemoveFav(cityName)}
      okButtonProps={{ loading }}
      cancelText='Cancelar'
      cancelButtonProps={{ disabled: loading }}
    >
      <Button
        type='link'
        icon={<StarFilled style={{ fontSize: size }} />}
        style={{
          fontSize: size,
          color: '#F7BA03',
          marginLeft: 5,
          padding: 0,
          cursor: 'pointer',
        }}
      />
    </Popconfirm>
  );
};
export default RemoveFavItemButton;
