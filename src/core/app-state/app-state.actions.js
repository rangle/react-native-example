// @flow

import { createAction } from '../utils/action-helper';
import { APPSTATE } from './app-state.types';

export const onAppStateChanged = (state: boolean): any =>
  createAction(APPSTATE.CHANGED, state);
