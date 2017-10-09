// @flow
import { takeLatest, select } from 'redux-saga/effects';
import { NAVIGATION } from './navigation.types';
import type { SetNavigatorAction, NavigationEvent } from './navigation.types';
import { getCurrentID } from './navigation.selectors';

const navigatorCache = {};
export function setNavigator(action: SetNavigatorAction): any {
  const { navigator } = action.payload;
  navigatorCache[navigator.navigatorID] = navigator;
}

export function* handleEvent(action: NavigationEvent): Generator<*, *, *> {
  const id = yield select(getCurrentID);
  const navigator = navigatorCache[id];
  if (navigator) {
    const { method, params } = action.payload;
    yield navigator[method](params);
  }
}

export function* watchForNavigationEvents(): Generator<*, *, *> {
  yield takeLatest(NAVIGATION.INIT, setNavigator);
  yield takeLatest(
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
  );
}
