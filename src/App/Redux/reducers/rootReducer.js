// REDUX
import { combineReducers } from 'redux';
// REDUX-PERSIST
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// REDUCERS
import { user } from './user/userReducer.js';
import { cart } from './cart/cartReducer.js';
import { directory } from './directory/directoryReducer.js';
import { inventory } from './inventory/inventoryReducer.js';

/*
============================================================
          REDUCERS AND WHERE THEY'RE BEING USED

  - user

    1. App.jsx
    2. header.jsx

  - cart

    1. header.jsx
    2. cart-icon.jsx
    3. cart-dropdown.jsx

============================================================
*/

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer']
};

const rootReducer = combineReducers({
  userReducer: user,
  cartReducer: cart,
  directoryReducer: directory,
  inventoryReducer: inventory
});

export default persistReducer(persistConfig, rootReducer);
