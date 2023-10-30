// store.ts

import { composeWithDevTools } from '@redux-devtools/extension';
import { createWrapper } from 'next-redux-wrapper';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  Store,
} from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import RootReducer, { AppState } from './reducers';
import rootSaga from './sagas';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

// create a makeStore function
const makeStore = () => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // 3: Run your sagas on server
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

const wrapper = createWrapper<Store<AppState>>(makeStore, {
  debug: true,
});
// export an assembled wrapper
export default wrapper;
