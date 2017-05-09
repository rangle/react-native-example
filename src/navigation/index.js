// @flow

import type { Store } from 'redux';
import type { Provider } from 'react-redux';
import R from 'ramda';
import { Navigation } from 'react-native-navigation';

// relative
import type { Scene, Options } from './types';
import { registerSceneHelper } from './utils';
import { scenes } from './scenes';

export function initialiseNavigation(store: Store, provider: Provider, options: Options) {
  // route handler
  const registerScene = R.partial(registerSceneHelper, [store, provider]);

  // register scenes
  scenes.forEach((scene: Scene): void => registerScene(scene));

  const initNav = options.tabs ? Navigation.startTabBasedApp : Navigation.startSingleScreenApp;
  initNav(options);
}
