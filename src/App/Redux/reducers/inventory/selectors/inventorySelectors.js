// RESELECT
import { createSelector } from 'reselect';

// INVENTORY REDUCER SELECTOR
const inventorySelector = (currentStore) => currentStore.inventoryReducer;

// INVENTORY ITEMS SELECTOR
export const inventoryItemSelector = createSelector(
  inventorySelector,
  (inventoryReducer) => inventoryReducer.inventory
);
