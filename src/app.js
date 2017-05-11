// @flow

import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';

import initialiseStore from 'src/core';
import { initialiseNavigation } from 'src/navigation';
import { Page } from 'src/components';
import { scenes, tabs } from './scenes';

export const store = initialiseStore(
  AsyncStorage,  // storage
  [],  // whitelist
  [], // middlewares
  [], // sagas
  {}, // client reducers
);

initialiseNavigation(
  scenes,
  store,
  Provider,
  { tabs },
);

AppRegistry.registerComponent('ReactNativeStarter', (): any => Page);
