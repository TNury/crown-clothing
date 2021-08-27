// ACTION VARIABLES
import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE
} from '../../../actions-types/actionTypes.js';

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user
});

// GOOGLE SIGN IN ACTIONS

// ACTION TRIGGER FUNCTION
export const googleSignInStart = () => ({
  type: GOOGLE_SIGN_IN_START
});

export const googleSignInSuccess = (currentUser) => ({
  type: GOOGLE_SIGN_IN_SUCCESS,
  payload: currentUser
});

export const googleSignInFailure = (error) => ({
  type: GOOGLE_SIGN_IN_FAILURE,
  payload: error
});

// EMAIL AND PASSWORD ACTIONS

// ACTION TRIGGER FUNCTION
export const emailSignInStart = (emailAndPassword) => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const emailSignInSuccess = (currentUser) => ({
  type: EMAIL_SIGN_IN_SUCCESS,
  payload: currentUser
});

export const emailSignInFailure = (error) => ({
  type: EMAIL_SIGN_IN_FAILURE,
  payload: error
});