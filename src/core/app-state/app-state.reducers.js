import { APPSTATE } from './app-state.types';

const initialState = true;

export const appStateReducer = (state = initialState, { type, payload }) => {
  if (type === APPSTATE.CHANGED) {
    return payload === 'active';
  }
  return state;
};
