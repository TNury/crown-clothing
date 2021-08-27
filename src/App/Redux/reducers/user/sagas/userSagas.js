// FIREBASE
import { auth, googleProvider, createUserProfileDocument } from '../../../../Firebase/firebase.js';
// SAGA EFFECTS
import { takeLatest, put, all, call } from 'redux-saga/effects';
// ACTION TYPES
import { GOOGLE_SIGN_IN_START, EMAIL_SIGN_IN_START } from '../../../actions-types/actionTypes.js';
// ACTIONS
import {
  signInSuccess,
  signInFailure
} from '../actions/userActions.js';

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();

    yield put(
      signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() })
    );

  } catch(error) {

    yield put(signInFailure(error))

  }
}

// GOOGLE SIGN IN SAGA
export function* signInWithGoogle() {
  try {

    const { user } = yield auth.signInWithPopup(googleProvider);
    
    yield getSnapshotFromUserAuth(user);

  } catch(error) {

    yield put(signInFailure(error))

  }
};

// GOOGLE SAGA TRIGGER FUNCTION
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
};

// EMAIL SIGN IN SAGA
export function* onSignInWithEmail({ payload: { email, password }}) {
  try {
    
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    
    yield getSnapshotFromUserAuth(user);

  } catch (error) {

    put(signInFailure(error));

  }
}

// EMAIL SAGA TRIGGER FUNCTION
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