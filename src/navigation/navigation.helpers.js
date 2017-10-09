// @flow
import R from 'ramda';
import type { Provider } from 'react-redux';
import type { Store } from 'redux';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { compose, hoistStatics, setStatic } from 'recompose';
import { withNavigation } from './with-navigation';

export function registerSceneHelper(store: Store<*, *>, provider: Provider<*, *>, scene: Scene) {
  const defaultStyle = {
    navBarHidden: true,
    statusBarTextColorScheme: 'light',
  };

  const Component = hoistStatics(
    compose(
      connect(() => ({})),
      withNavigation,
      setStatic('navigatorStyle', R.pathOr(defaultStyle, 'navigatorStyle', scene)),
    ),
  )(scene.Component);
  Navigation.registerComponent(scene.screen, () => Component, store, provider);
}
