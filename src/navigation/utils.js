// @flow
import type { Provider } from 'react-redux';
import type { Store } from 'redux';
import { Navigation } from 'react-native-navigation';
import type { Scene } from './types';

export function registerSceneHelper(
  store: Store,
  provider: Provider,
  scene: Scene,
) {
  Navigation.registerComponent(
    scene.screen,
    scene.Component,
    store,
    provider,
  );
}
