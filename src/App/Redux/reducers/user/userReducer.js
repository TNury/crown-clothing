// ACTION VARIABLES
import { 
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE
 } from '../../actions-types/actionTypes';

const INITIAL_STORE = {
  user: null,
  error: null
};

export const user = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case GOOGLE_SIGN_IN_SUCCESS:
    case EMAIL_SIGN_IN_SUCCESS:
      return {
        ...currentStore,
        user: action.payload,
        error: null
      };
    case GOOGLE_SIGN_IN_FAILURE:
    case EMAIL_SIGN_IN_FAILURE:
      return {
        ...currentStore,
        error: action.payload
      };
    default:
      return currentStore;
  }
};
