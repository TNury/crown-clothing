// ACTION VARIABLES
import { SET_CURRENT_USER } from '../../actions-types/actionTypes';

const INITIAL_STORE = {
  user: null
};

export const user = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...currentStore,
        user: action.payload
      };
    default:
      return currentStore;
  }
};
