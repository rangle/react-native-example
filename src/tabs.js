import { homeScene } from './scenes/home';
import { pictureScene } from './scenes/picture';

const iconInsets = {
  top: 2,
  bottom: -2,
};

export const tabs = [
  {
    ...homeScene,
    icon: require('src/assets/icons/home.png'),
    iconInsets,
  },
  {
    ...pictureScene,
    icon: require('src/assets/icons/add.png'),
    iconInsets,
  },
];

export const devTabs = [...tabs]; // TODO: add dev menu tab
