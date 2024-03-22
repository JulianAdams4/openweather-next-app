import { Drawer } from 'antd';
import { FavLocation, ReactMouseEvent } from '@project/next-env';

import Sider from '../Sider';
import './styles.css';

type ResponsiveDrawerProps = {
  locations: FavLocation[];
  openDrawer: boolean;
  weatherBgColor: string;
  selectedLocation: string;
  onSelectLocation: (loc: string) => void;
  onCloseDrawer: (e: ReactMouseEvent) => void;
  onRemoveFav: (name: string) => void;
};

const ResponsiveDrawer = ({
  locations,
  openDrawer,
  onCloseDrawer,
  weatherBgColor,
  selectedLocation,
  onSelectLocation,
  onRemoveFav,
}: ResponsiveDrawerProps) => {
  return (
    <Drawer
      closable
      placement='left'
      key='responsiveDrawer'
      open={openDrawer}
      onClose={onCloseDrawer}
      style={{ backgroundColor: weatherBgColor, maxWidth: '80%' }}
    >
      <Sider
        locations={locations}
        weatherBgColor={weatherBgColor}
        selectedLocation={selectedLocation}
        onSelectLocation={onSelectLocation}
        onRemoveFav={onRemoveFav}
      />
    </Drawer>
  );
};

export default ResponsiveDrawer;
