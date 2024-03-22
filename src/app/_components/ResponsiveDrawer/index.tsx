import { Drawer } from 'antd';

import { FavLocation, ReactMouseEvent } from '@app/types';

import Sider from '../Sider';
import './styles.css';

type ResponsiveDrawerProps = {
  locations: FavLocation[];
  openDrawer: boolean;
  weatherBgColor: string;
  selectedLocation: string;
  onSelectLocation: (loc: string, flag?: boolean) => void;
  onCloseDrawer: (e?: ReactMouseEvent) => void;
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
        onSelectLocation={(name: string) => {
          onSelectLocation(name);
          onCloseDrawer();
        }}
        onRemoveFav={onRemoveFav}
        showFavIcon={false}
      />
    </Drawer>
  );
};

export default ResponsiveDrawer;
