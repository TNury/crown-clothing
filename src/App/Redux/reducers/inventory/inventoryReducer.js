// ACTION TYPES 
import {
  FETCH_INVENTORY_START,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE
} from '../../actions-types/actionTypes.js';

const INITIAL_STATE = {
  inventory: null,
  isFetching: false,
  errorMessage: undefined
};

export const inventory = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_START:
      return {
        ...currentState,
        isFetching: true
      };
    case FETCH_INVENTORY_SUCCESS:
      return {
        ...currentState,
        isFecthing: false,
        inventory: action.payload
      };
    case FETCH_INVENTORY_FAILURE:
      return {
        ...currentState,
        isFecthing: false,
        errorMessage: action.payload
      };
    default:
      return currentState;
  }
};
