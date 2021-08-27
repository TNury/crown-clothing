// ACTION VARIABLES
import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from '../../../actions-types/actionTypes.js';

// ACTION TRIGGER FUNCTION
export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});


// ACTION TRIGGER FUNCTION
export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (currentUser) => ({
  type: SIGN_IN_SUCCESS,
  payload: currentUser
});

export const signInFailure = (error) => ({
  type: SIGN_IN_FAILURE,
  payload: error
});