// REDUX
import { createStore, applyMiddleware } from 'redux';
// ROOT REDUCER
import rootReducer from '../reducers/rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// REDUX PERSIST
import { persistStore } from 'redux-persist';
// REDUX SAGA
import { rootSaga } from '../reducers/rootSagas.js';
import createSagaMiddleware from 'redux-saga';

// SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

// MIDDLEWARES
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
