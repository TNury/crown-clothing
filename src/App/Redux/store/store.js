// REDUX
import { createStore, applyMiddleware } from 'redux';
// ROOT REDUCER
import rootReducer from '../reducers/rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// REDUX PERSIST
import { persistStore } from 'redux-persist';
// REDUX SAGA
import createSagaMiddleware from 'redux-saga';
// test
import { fetchInventoryStart } from '../reducers/inventory/sagas/inventorySagas.js';

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// MIDDLEWARES
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchInventoryStart);

export const persistor = persistStore(store);
