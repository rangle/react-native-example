// @flow

import { Home } from 'components';
import type { Scene } from './types';

export const scenes: Array<Scene> = [
  {
    route: 'app.Home',
    component: Home,
    title: 'Home',
  },
];
