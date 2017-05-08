import React from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
  AsyncStorage,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';

import initialiseStore from 'core';
import { s } from 'styles';
import { initialiseNavigation } from 'navigation';

export const store = initialiseStore(
  // storage
  AsyncStorage,
  // whitelist
  [],
  [], // middlewares
  [], // sagas
  {}, // client reducers
);

const App = ({ children }) => (
  <View style={[s.flx_i, s.flx_col]}>
    <StatusBar
      backgroundColor={'black'}
      barStyle="dark-content"
    />
    {children}
  </View>
);

initialiseNavigation(store, Provider,

);
AppRegistry.registerComponent('ReactNativeStarter', () => App);
