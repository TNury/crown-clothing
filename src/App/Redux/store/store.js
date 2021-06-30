// REDUX
import { createStore } from 'redux';
// ROOT REDUCER
import rootReducer from '../reducers/rootReducer.js';
// REDUX DEV TOOLS
import { composeWithDevTools } from 'redux-devtools-extension';
// REDUX PERSIST
import { persistStore } from 'redux-persist';

export const store = createStore(rootReducer, composeWithDevTools());

export const persistor = persistStore(store);
