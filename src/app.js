// @flow

import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';
import { Provider } from 'react-redux';

import initialiseStore from 'core';
import { initialiseNavigation } from 'navigation';
import { Page } from 'components';

export const store = initialiseStore(
  AsyncStorage,  // storage
  [],  // whitelist
  [], // middlewares
  [], // sagas
  {}, // client reducers
);

initialiseNavigation(store, Provider,
  {
    screen: {
      screen: 'app.Home', // unique ID registered with Navigation.registerScreen
      title: 'Home', // title of the screen as appears in the nav bar (optional)
    },
  },
);

AppRegistry.registerComponent('ReactNativeStarter', (): any => Page);
