// @flow

import type { Store } from 'redux';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import Config from 'react-native-config';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { forkWithErrHandler } from 'src/utils/saga-util';

import { coreSagas } from './sagas';
import { coreReducers } from './reducers';

const { DEV_MENU } = Config;

declare type InitializeStore = {
  storage: any,
  whitelist: string[],
  clientMiddlewares: any[],
  clientSagas: Function[],
  clientReducers: any,
};

function initializeStore({
  storage,
  whitelist = [],
  clientMiddlewares = [],
  clientSagas = [],
  clientReducers = {},
}: InitializeStore): Store<*, *> {
  const logger = createLogger({ collapsed: true });

  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = { ...coreReducers, ...clientReducers };
  const middlewares = DEV_MENU
    ? [sagaMiddleware, logger, ...clientMiddlewares]
    : [sagaMiddleware, ...clientMiddlewares];

  const store = createStore(
    combineReducers(rootReducer),
    undefined,
    compose(autoRehydrate(), applyMiddleware(...middlewares)),
  );

  const config: Object = {
    storage,
    whitelist,
  };

  persistStore(store, config);
  sagaMiddleware.run(function* rootSaga(): Generator<*, *, *> {
    const forkedSagas = [...coreSagas, ...clientSagas].map((saga: Function) =>
      forkWithErrHandler(saga),
    );
    yield all(forkedSagas);
  });

  return store;
}

export default initializeStore;
