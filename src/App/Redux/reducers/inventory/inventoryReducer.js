// ACTION TYPES 
import {
  FETCH_INVENTORY_START,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE
} from '../../actions-types/actionTypes.js';

const INITIAL_STORE = {
  inventory: null,
  isFetching: false,
  errorMessage: undefined
};

export const inventory = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_START:
      return {
        ...currentStore,
        isFetching: true
      };
    case FETCH_INVENTORY_SUCCESS:
      return {
        ...currentStore,
        isFecthing: false,
        inventory: action.payload
      };
    case FETCH_INVENTORY_FAILURE:
      return {
        ...currentStore,
        isFecthing: false,
        errorMessage: action.payload
      };
    default:
      return currentStore;
  }
};
