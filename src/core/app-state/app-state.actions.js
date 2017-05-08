import { createAction } from '../utils/action-helper';
import { APPSTATE } from './app-state.types';

export const onAppStateChanged = state =>
  createAction(APPSTATE.CHANGED, state);
