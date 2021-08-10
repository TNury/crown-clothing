// ACTION VARIABLES
import { UPDATE_INVENTORY } from '../../../actions-types/actionTypes.js';

export const updateInventory = (inventoryMap) => ({
  type: UPDATE_INVENTORY,
  payload: inventoryMap
});
