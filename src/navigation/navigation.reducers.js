// @flow
import R from 'ramda';
import { NAVIGATION } from './navigation.types';
import type { NavigationAction, NavigationState } from './navigation.types';

const initialState = {
  previousID: '',
  currentID: 'controllerID1_nav0',
};

export const navigationReducer = (
  state: NavigationState = initialState,
  action: NavigationAction,
): NavigationState => {
  const { type, payload } = action;
  if (type === NAVIGATION.TRACK) {
    if (payload.visible) {
      return R.assoc('currentID', payload.id, state);
    }
    return R.assoc('previousID', payload.id, state);
  }
  return state;
};
