// @flow

/* Test coverage disabled for file since mocking recompose isn't adding much value */

import R from 'ramda';
import { compose, mapProps, lifecycle, withHandlers } from 'recompose';
import * as navActions from './navigation.actions';

export type MetaNavigationProps = {
  passProps?: { [key: string]: any },
  animationType?: 'slide-down',
};

export type MetaNavigationParams = { params: MetaNavigationProps };

export type WithNavigationProps = {
  navigator: any,
  dispatch: (action: Action<any, any, any>) => void,
  dismissModal: (meta: ?MetaNavigationProps) => void,
  showModal: (meta: MetaNavigationProps & Scene) => void,
  showLightBox: (meta: MetaNavigationProps & Scene) => void,
  dismissLightBox: () => void,
  pushScene: (screen: string, meta: ?MetaNavigationParams) => void,
  popScene: () => void,
  popToRootScene: () => void,
  switchToTab: (tabIndex: number, meta: ?MetaNavigationParams) => void,
};

/*
 * Higher order function that turns the navigation actions into dispatchers
 * Each action get partialized with the navigation object
 * This should only be used on top-level scenes
 */
export const withNavigation = compose(
  mapProps((props: WithNavigationProps) => ({
    ...R.map((entry: any) => (...params: any) => props.dispatch(entry(...params)), navActions),
    ...props,
  })),
  lifecycle({
    componentWillMount() {
      /* populate navigator on navigatorCache */
      this.props.populateNavigator(this.props.navigator);
      this.props.navigator.setOnNavigatorEvent((event: any) => {
        switch (event.id) {
          case 'didAppear':
            this.props.onTrack(this.props.navigator.navigatorID, true);
            break;
          case 'didDisappear':
            this.props.onTrack(this.props.navigator.navigatorID, false, {});
            break;
          default:
            break;
        }
      });
    },
  }),
);

export const withNavigationHandlers = (handlers: any): any => withHandlers(handlers);
