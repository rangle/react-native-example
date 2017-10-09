// @flow
/* eslint import/first: "off",
 flowtype/require-parameter-type: "off",
 flowtype/require-return-type: "off"
 */

import { takeLatest, select } from 'redux-saga/effects';
import { NAVIGATION } from './navigation.types';
import { watchForNavigationEvents, handleEvent, setNavigator } from './navigation.sagas';
import { getCurrentID } from './navigation.selectors';

describe('Navigation saga suite', () => {
  describe('watcher saga', () => {
    it('should watch for the next navigation event', () => {
      const saga = watchForNavigationEvents();
      expect(saga.next().value).toEqual(
        takeLatest(NAVIGATION.INIT, setNavigator),
        takeLatest(
          [
            NAVIGATION.PUSH,
            NAVIGATION.POP,
            NAVIGATION.SWITCH_TO_TAB,
            NAVIGATION.POP_TO_ROOT,
            NAVIGATION.RESET_TO,
            NAVIGATION.POP_TO_ROOT,
            NAVIGATION.RESET_TO,
            NAVIGATION.SHOW_MODAL,
            NAVIGATION.DISMISS_MODAL,
            NAVIGATION.SHOW_LIGHTBOX,
            NAVIGATION.DISMISS_LIGHTBOX,
            NAVIGATION.DISMISS_ALL_MODALS,
            NAVIGATION.TOGGLE_NAV_BAR,
            NAVIGATION.SET_TITLE,
            NAVIGATION.SET_SUB_TITLE,
            NAVIGATION.SET_ON_NAVIGATION_EVENT,
          ],
          handleEvent,
        ),
      );
    });
  });
  describe('handle event saga', () => {
    it('should succeed the event handling', () => {
      const saga = handleEvent({
        payload: {
          method: 'push',
        },
      });
      expect(saga.next().value).toEqual(select(getCurrentID));
    });
  });
});
