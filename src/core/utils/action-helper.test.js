import { createAction } from './action-helper';

describe('Create Action Helper', () => {
  it('should create a formated action', () => {
    expect(createAction('TESTED')).toEqual({ type: 'TESTED', payload: {}, meta: {} });
  });
  it('should create a formated action with a payload', () => {
    expect(createAction('TESTED', 1)).toEqual({ type: 'TESTED', payload: 1, meta: {} });
  });
  it('should create a formated action with meta', () => {
    expect(createAction('TESTED', 1, 2)).toEqual({ type: 'TESTED', payload: 1, meta: 2 });
  });
});
