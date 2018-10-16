import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';

import createGlobalReducer from './global-reducer';
import globalSaga from './global-saga';

const globalReducer = createGlobalReducer();
const sagaMiddleware = createSagaMiddleware();

const middlewareComposedWithDevTools = composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  // NOTE: put other middleware here
);

const reduxStore = createStore(
  globalReducer,
  middlewareComposedWithDevTools,
);

sagaMiddleware.run(globalSaga);

export default reduxStore;
