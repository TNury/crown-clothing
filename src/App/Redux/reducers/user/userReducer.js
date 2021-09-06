// ACTION TYPES
import { 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from '../../actions-types/actionTypes';

const INITIAL_STATE = {
  user: null,
  error: null
};

export const user = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...currentState,
        user: action.payload,
        error: null
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...currentState,
        user: null,
        error: null
      };
    case SIGN_IN_FAILURE:
    case SIGN_UP_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...currentState,
        error: action.payload
      };
    default:
      return currentState;
  }
};
