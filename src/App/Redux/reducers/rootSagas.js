// SAGA EFFECTS
import { all, call } from 'redux-saga/effects';
// SAGAS
import { fetchInventoryStart } from './inventory/sagas/inventorySagas.js';

export function* rootSaga() {
  yield all([
    call(fetchInventoryStart)
  ])
}