// @flow

import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';

import initialiseStore from 'core';
import { initialiseNavigation } from 'navigation';
import { Page } from 'components';
import { scenes } from './scenes';

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
  {
    screen: {
      screen: 'app.Home',
      title: 'Home',
      navigatorStyle: {
        navBarHidden: true,
      },
    },
  },
);

AppRegistry.registerComponent('ReactNativeStarter', (): any => Page);
