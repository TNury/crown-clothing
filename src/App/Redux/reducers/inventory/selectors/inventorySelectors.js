// RESELECT
import { createSelector } from 'reselect';
// LODASH MEMOIZER
import memoize from 'lodash.memoize';

// INVENTORY REDUCER SELECTOR
const inventorySelector = (currentStore) => currentStore.inventoryReducer;

// INVENTORY ITEMS SELECTOR
export const inventoryItemSelector = createSelector(
  inventorySelector,
  (inventoryReducer) => inventoryReducer.inventory
);

// 
export const inventoryPreviewSelector = createSelector(
  inventoryItemSelector,
  (inventory) => Object.keys(inventory).map((key) => inventory[key])
);

// CATEGORY SELECTOR
export const categorySelector = memoize((categoryId) => (
  createSelector(
    inventoryItemSelector,
    (inventory) => inventory[categoryId]
  )
));