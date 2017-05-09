// @flow

import { APPSTATE } from './app-state.types';

const initialState = true;

export const appStateReducer = (
  state: boolean = initialState,
  { type, payload }: Object,
): boolean => {
  if (type === APPSTATE.CHANGED) {
    return payload === 'active';
  }
  return state;
};
