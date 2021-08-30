// SAGA EFFECTS
import { all, call } from 'redux-saga/effects';
// SAGAS
import { inventorySagas } from './inventory/sagas/inventorySagas.js';
import { userSagas } from './user/sagas/userSagas.js';
import { cartSagas } from './cart/sagas/cartSagas.js';

export function* rootSaga() {
  yield all([
    call(inventorySagas),
    call(userSagas),
    call(cartSagas)
  ]);
};