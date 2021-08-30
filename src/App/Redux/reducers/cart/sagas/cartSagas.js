// SAGA EFFECTS
import { all, call, takeLatest, put } from 'redux-saga/effects';
// ACTION TYPES
import { SIGN_OUT_SUCCESS } from '../../../actions-types/actionTypes';
import { clearCart } from '../actions/cartActions';

// ATF = ACTION TRIGGER FUNCTION

export function* clearCartOnSignOut() {
  yield put(clearCart());
};

export function* onSignOutSuccess () {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas() {
  yield (all([
    call(onSignOutSuccess)
  ]));
};