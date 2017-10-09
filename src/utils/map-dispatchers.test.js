// @flow
import { mapDispatchers } from './map-dispatchers';

describe('map dispatchers', () => {
  const dispatch = (val: any) => val;
  const dispatchers = {
    dispatcherA: () => 1,
    dispatcherB: () => 2,
    dispatcherC: () => 3,
  };
  it('should return a function that takes in the dispatchers', () => {
    expect(typeof mapDispatchers(dispatchers)).toBe(typeof Function);
  });
  it('should return an object with all dispatchers as wrapped functions of dispatch', () => {
    const newDispatchers = mapDispatchers(dispatchers)(dispatch);
    const spy = jest.spyOn(newDispatchers, 'dispatcherA');
    const spyDispatch = jest.spyOn(newDispatchers, 'dispatcherA', 'dispatch');
    expect(newDispatchers.dispatcherA()).toEqual(1);
    expect(spy).toHaveBeenCalled();
    expect(spyDispatch).toHaveBeenCalled();
  });
});
