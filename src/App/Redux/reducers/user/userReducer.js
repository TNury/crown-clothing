// ACTION TYPES
import { 
  SIGN_IN_SUCCESS, 
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE
} from '../../actions-types/actionTypes';

const INITIAL_STORE = {
  user: null,
  error: null
};

export const user = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...currentStore,
        user: action.payload,
        error: null
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...currentStore,
        user: null,
        error: null
      };
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...currentStore,
        error: action.payload
      };
    default:
      return currentStore;
  }
};
