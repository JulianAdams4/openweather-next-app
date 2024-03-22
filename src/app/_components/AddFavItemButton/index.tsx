import { Button } from 'antd';
import { StarOutlined } from '@ant-design/icons';

import { WeatherData } from '@app/types';

type AddFavItemButtonProps = {
  locationData: WeatherData;
  onAddFav: (locationData: WeatherData) => void;
};

const AddFavItemButton = ({
  locationData,
  onAddFav,
}: AddFavItemButtonProps) => {
  return (
    <Button
      type='link'
      icon={<StarOutlined size={24} style={{ fontSize: 24 }} />}
      onClick={() => onAddFav(locationData)}
      style={{
        fontSize: 24,
        color: '#F7BA03',
        marginLeft: 5,
        padding: 0,
        cursor: 'pointer',
      }}
    />
  );
};
export default AddFavItemButton;
