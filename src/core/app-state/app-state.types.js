import { prefixActionTypes } from '../utils/action-helper';

export const APPSTATE = prefixActionTypes({
  CHANGED: null,
}, 'APPSTATE');
