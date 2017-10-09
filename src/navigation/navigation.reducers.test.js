import { onTrack } from './navigation.actions';

import { navigationReducer } from './navigation.reducers';

describe('navigation/TRACK', () => {
  const initialState = {
    previousRoute: 'id121',
    currentRoute: 'id122',
  };

  it('should return initialState when nothing is fired', () => {
    const next = navigationReducer(initialState, { type: null });
    expect(next).toMatchSnapshot();
  });

  it('should track when navigation push is fired', () => {
    const next = navigationReducer(initialState, onTrack({}, 'id123', true, {}));
    expect(next).toMatchSnapshot();
  });

  it('should track when navigation pop is fired', () => {
    const prev = navigationReducer(initialState, onTrack({}, 'id123', false, {}));
    const next = navigationReducer(prev, onTrack({}, 'id124', true, {}));
    expect(prev).toMatchSnapshot();
    expect(next).toMatchSnapshot();
  });
});
