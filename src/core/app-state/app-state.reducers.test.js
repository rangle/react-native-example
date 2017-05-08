import { appStateReducer } from './app-state.reducers';
import { APPSTATE } from './app-state.types';

describe('APPSTATE reducer', () => {
  it('should change from active to background', () => {
    expect(appStateReducer('active', { type: APPSTATE.CHANGED, payload: 'background' })).toBe(false);
  });
});
