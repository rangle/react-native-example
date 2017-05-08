import R from 'ramda';
import { reducer } from './reducer-helper';

const initialState = { foo: 12, bar: 14, baz: 16 };

const testReducer = reducer(
  ['FOO', (state, { payload }) => R.assoc('foo', payload, state)],
  ['BAR', (state, { payload }) => R.assoc('bar', payload, state)],
  ['BAZ', (state, { payload }) => R.assoc('baz', payload, state)],
)(initialState);

describe('Reducer Helper', () => {
  test('should create a reducer that handles specified action types', () => {
    expect(testReducer(initialState, { type: 'FOO', payload: 47 }))
      .toEqual({ foo: 47, bar: 14, baz: 16 });
    expect(testReducer(initialState, { type: 'BAR', payload: 48 }))
      .toEqual({ foo: 12, bar: 48, baz: 16 });
    expect(testReducer(initialState, { type: 'BAZ', payload: 49 }))
      .toEqual({ foo: 12, bar: 14, baz: 49 });
  });

  test(
    'should create a reducer with an identity function to handle invalid action types',
    () => {
      const state = { foo: 2, bar: 3, baz: 4 };
      expect(testReducer(state, { type: 'INVALID', payload: 47 }))
        .toEqual(state);
    });

  test('should create a reducer that returns initialState when no state is provided', () => {
    expect(testReducer()).toEqual(initialState);
    expect(testReducer(null, {})).toEqual(initialState);
    expect(testReducer(undefined, {})).toEqual(initialState);
  });
});
