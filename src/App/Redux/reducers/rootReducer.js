// REDUX
import { combineReducers } from 'redux';
// REDUX-PERSIST
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// REDUCERS
import { user } from './user/userReducer.js';
import { cart } from './cart/cartReducer.js';
import { directory } from './directory/directoryReducer.js';
<<<<<<< HEAD
=======
import { inventory } from './inventory/inventoryReducer.js';
>>>>>>> shop-data

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
<<<<<<< HEAD
  whitelist: ['cartReducer']
=======
  whitelist: ['cartReducer', 'directoryReducer', 'inventoryReducer']
>>>>>>> shop-data
};

const rootReducer = combineReducers({
  userReducer: user,
  cartReducer: cart,
<<<<<<< HEAD
  directoryReducer: directory
=======
  directoryReducer: directory,
  inventoryReducer: inventory
>>>>>>> shop-data
});

export default persistReducer(persistConfig, rootReducer);
