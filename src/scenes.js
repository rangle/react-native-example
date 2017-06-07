// @flow

import { Home, Search } from 'src/components';
import { Picture } from 'src/picture';
import type { Scene } from 'src/navigation';

export const scenes: Array<Scene> = [
  {
    screen: 'tabs.Home',
    Component: (): Element => Home,
    title: 'Home',
  },
  {
    screen: 'tabs.Search',
    Component: (): Element => Search,
    title: 'Search',
  },
  {
    screen: 'tabs.Picture',
    Component: (): Element => Picture,
    title: 'Picture',
  },
];

export const tabs = [
  {
    screen: 'tabs.Home',
    icon: require('./assets/icons/home.png'),
    selectedIcon: require('./assets/icons/home.png'),
    title: 'Home',
  },
  {
    screen: 'tabs.Picture',
    icon: require('./assets/icons/add.png'),
    selectedIcon: require('./assets/icons/add.png'),
    title: 'Picture',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
  {
    screen: 'tabs.Search',
    icon: require('./assets/icons/search.png'),
    selectedIcon: require('./assets/icons/search.png'),
    title: 'Search',
  },
];
