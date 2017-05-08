/**
 * @providesModule core
 */

import R from 'ramda';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './reducers';
import { safeExecuteFunctions } from './utils';

function initialiseStore(
  storage,
  whitelist = [],
  clientMiddlewares = {},
  clientSagas = [],
  clientReducers = {},
) {
  const logger = createLogger({ collapsed: true });

  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = { ...reducers, ...clientReducers };
  const store = createStore(
    combineReducers(rootReducer),
    undefined,
    compose(
      applyMiddleware(sagaMiddleware, logger, ...clientMiddlewares),
      autoRehydrate(),
    ),
  );

  persistStore(store, {
    storage,
    whitelist,
  });

  sagaMiddleware.run(function* rootSaga() {
    yield safeExecuteFunctions(R.concat(sagas, clientSagas));
  });

  return store;
}

export default initialiseStore;
