// FIREBASE
import { auth, googleProvider, createUserProfileDocument } from '../../../../Firebase/firebase.js';
// SAGA EFFECTS
import { takeLatest, put, all, call } from 'redux-saga/effects';
// ACTION TYPES
import {
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE
} from '../../../actions-types/actionTypes.js';
// ACTIONS
import { googleSignInSuccess, googleSignInFailure } from '../actions/userActions.js';


export function* signInWithGoogle() {
  try {

    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();

    yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }))

  } catch(error) {

    yield put(googleSignInFailure(error))

  }
};

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
};

// EXPORTS USER SAGAS TO ROOT SAGA
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart)
  ]);
};