import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Home } from 'components';

export const rootScene = {
  route: 'main.Home',
  Component: Home,
  title: 'Home',
};

export const scenes = [];

export function registerSceneHelper(
  store: Object,
  Provider: Component,
  scene: Object,
) {
  const { route, Component, options = {} } = scene;

  Navigation.registerComponent(
    route,
    () => Component,
    store,
    Provider
  );
}
