// REDUX
import { createStore, applyMiddleware } from 'redux';
// ROOT REDUCER
import rootReducer from '../reducers/rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// REDUX PERSIST
import { persistStore } from 'redux-persist';
// REDUX THUNK
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
