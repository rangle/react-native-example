import { eventChannel } from 'redux-saga';
import { AppState } from 'react-native';
import {
  call,
  take,
  put,
} from 'redux-saga/effects';
import { onAppStateChanged } from './app-state.actions';

const removeEventListener = event => callback => AppState.removeEventListener(event, callback);

function appStateStatusChannel() {
  return eventChannel((emitter) => {
    AppState.addEventListener('change', emitter);
    return removeEventListener('change');
  });
}

export function* watchForAppStateChange() {
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
