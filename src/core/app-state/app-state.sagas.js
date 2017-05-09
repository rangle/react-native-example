// @flow
import { eventChannel } from 'redux-saga';
import { AppState } from 'react-native';
import {
  call,
  take,
  put,
} from 'redux-saga/effects';
import { onAppStateChanged } from './app-state.actions';

const removeEventListener = (event: any): Function => (callback: Function): void =>
  AppState.removeEventListener(event, callback);

function appStateStatusChannel(): Function {
  return eventChannel((emitter: Object): any => {
    AppState.addEventListener('change', emitter);
    return removeEventListener('change');
  });
}

export function* watchForAppStateChange(): Generator<*, *, *> {
  const stateChannel = yield call(appStateStatusChannel);
  try {
    while (true) {
      const currentAppState = yield take(stateChannel);
      yield put(onAppStateChanged(currentAppState));
    }
  } finally {
    // do nothing
  }
}
