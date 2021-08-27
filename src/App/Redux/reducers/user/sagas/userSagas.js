// FIREBASE
import { auth, googleProvider, createUserProfileDocument } from '../../../../Firebase/firebase.js';
// SAGA EFFECTS
import { takeLatest, put, all, call } from 'redux-saga/effects';
// ACTION TYPES
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from '../../../actions-types/actionTypes.js';
// ACTIONS
import {
  googleSignInSuccess,
  googleSignInFailure,
  emailSignInSuccess,
  emailSignInFailure
} from '../actions/userActions.js';

// GOOGLE SIGN IN SAGAS

export function* signInWithGoogle() {
  try {

    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );

  } catch(error) {

    yield put(googleSignInFailure(error))

  }
};

// SAGA TRIGGER FUNCTION
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
};

// EMAIL SIGN IN SAGAS

export function* onSignInWithEmail({ payload: { email, password }}) {
  try {
    
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();

    yield put(
      emailSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );

  } catch (error) {

    put(emailSignInFailure(error))

  }
}

// SAGA TRIGGER FUNCTION
export function* onEmailAndPasswordStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onSignInWithEmail);
}

// EXPORTS USER SAGAS TO ROOT SAGA
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailAndPasswordStart)
  ]);
};