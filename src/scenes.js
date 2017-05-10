// @flow

import { Home } from 'components';
import type { Scene } from 'navigation';

export const scenes: Array<Scene> = [
  {
    screen: 'app.Home',
    Component: (): Element => Home,
    title: 'Home',
    navigatorStyle: {
      navBarHidden: true,
    },
  },
];

export const tabs = [
  {
    label: 'One',
    screen: 'tabs.Home',
    icon: require('../img/one.png'),
    selectedIcon: require('../img/one_selected.png'),
    title: 'Screen One',
  },
  {
    label: 'Two',
    screen: 'example.SecondTabScreen',
    icon: require('../img/two.png'),
    selectedIcon: require('../img/two_selected.png'),
    title: 'Screen Two',
  },
];
