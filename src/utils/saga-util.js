// @flow
import { call, fork } from 'redux-saga/effects';

export function* sagaErrorWrapper(saga: Function, args: any[]): Generator<*, *, *> {
  try {
    yield call(saga, ...args);
  } catch (error) {
    // TODO: pass function to handle
    // eslint-disable-next-line no-console
    console.log(error, saga);
  }
}

export const forkWithErrHandler = (fn: Function, ...args: any[]) =>
  fork(sagaErrorWrapper, fn, args);
