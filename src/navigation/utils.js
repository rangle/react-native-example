// @flow
import type { Component } from 'react';
import type { Provider } from 'react-redux';
import type { Store } from 'redux';
import { Navigation } from 'react-native-navigation';
import type { Scene } from './types';

export function registerSceneHelper(
  store: Store,
  provider: Provider,
  scene: Scene,
) {
  const { route, component } = scene;

  Navigation.registerComponent(
    route,
    (): Component<any, any, any> => component,
    store,
    provider,
  );
}
