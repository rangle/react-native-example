/**
 * @providesModule navigation
 */

import R from 'ramda';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { registerSceneHelper, rootScene, scenes } from './scenes';

export function initialiseNavigation(store: Object, Provider: Component, options: Object) {
  const {
    initialRoute,
  } = options;

  // route handler
  const registerScene = R.partial(registerSceneHelper, [store, Provider]);

  // register scenes
  scenes.forEach((scene: Object) => registerScene(scene));
  registerScene(rootScene);

  return Navigation.startSingleScreenApp({
    screen: {
      screen: rootScene.route,
      title: rootScene.title,
      navigatorStyle: {},
      navigatorButtons: {}
    },
    passProps: {},
    animationType: 'fade'
  });
}
