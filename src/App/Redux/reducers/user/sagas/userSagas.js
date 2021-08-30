// FIREBASE
import { 
  auth, 
  googleProvider, 
  createUserProfileDocument,
  getCurrentUser
} from '../../../../Firebase/firebase.js';
// SAGA EFFECTS
import { takeLatest, put, all, call } from 'redux-saga/effects';
// ACTION TYPES
import { 
  GOOGLE_SIGN_IN_START, 
  EMAIL_SIGN_IN_START, 
  CHECK_USER_SESSION,
  SIGN_OUT_START
} from '../../../actions-types/actionTypes.js';
// ACTIONS
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
} from '../actions/userActions.js';

// ATF = ACTION TRIGGER FUNCTION

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
};

/* SAGAS */ 

// IS USER AUTHENTICATED SAGA
export function* isAuthenticated() {
  try {

    const userAuth = yield getCurrentUser();

    if (!userAuth) return;

    yield getSnapshotFromUserAuth(userAuth);
    
  } catch (error) {

    yield put(signInFailure(error));

  }
};

// GOOGLE SIGN IN SAGA
export function* signInWithGoogle() {
  try {

    const { user } = yield auth.signInWithPopup(googleProvider);
    
    yield getSnapshotFromUserAuth(user);

  } catch(error) {

    yield put(signInFailure(error))

  }
};

// EMAIL SIGN IN SAGA
export function* onSignInWithEmail({ payload: { email, password }}) {
  try {
    
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    
    yield getSnapshotFromUserAuth(user);

  } catch (error) {

    put(signInFailure(error));

  }
};

// SIGN OUT SAGA
export function* signOut() {
  try {

    yield auth.signOut();

    yield put(signOutSuccess());

  } catch(error) {
    
    yield put(signOutFailure(error));

  }
};

/* ATFS */ 

// CHECK USER SESSION ATF
export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isAuthenticated);
};

// GOOGLE ATF
export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
};

// EMAIL ATF
export function* onEmailAndPasswordStart() {
  yield takeLatest(EMAIL_SIGN_IN_START, onSignInWithEmail);
};

// SIGN OUT ATF
export function* onSignOutStart() {
  yield takeLatest(SIGN_OUT_START, signOut);
};


// EXPORTS USER SAGAS TO ROOT SAGA
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailAndPasswordStart),
    call(onCheckUserSession),
    call(onSignOutStart)
  ]);
};