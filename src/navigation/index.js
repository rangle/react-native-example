// @flow

/* Test coverage disabled for file */

import type { Store } from 'redux';
import R from 'ramda';
import { Navigation } from 'react-native-navigation';

// relative
import type { Options } from './navigation.types';
import { registerSceneHelper } from './navigation.helpers';

export * from './navigation.sagas';
export * from './navigation.actions';
export * from './navigation.types';
export * from './navigation.reducers';
export * from './with-navigation';

export const initializeNavigation = (
  scenes: Scene[],
  store: Store<*, *>,
  provider: any,
  options: Options,
): Promise<any> => {
  // route handler
  const registerScene = R.partial(registerSceneHelper, [store, provider]);

  // register scenes
  scenes.forEach((scene: Scene): void => registerScene(scene));

  try {
    const initNav = options.tabs ? Navigation.startTabBasedApp : Navigation.startSingleScreenApp;
    initNav(options);
    return Promise.resolve(scenes);
  } catch (e) {
    return Promise.reject(e);
  }
};
