// ACTION TYPES 
import { UPDATE_INVENTORY } from '../../actions-types/actionTypes.js';

const INITIAL_STORE = {
  inventory: null
};

export const inventory = (currentStore = INITIAL_STORE, action) => {
  switch (action.type) {
    case UPDATE_INVENTORY: 
      return {
        ...currentStore,
        inventory: action.payload
      }
    default:
      return currentStore;
  }
};
